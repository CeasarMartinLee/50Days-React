import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './frontpage.css'
import GameStats from '../components/GameStats'
import io from 'socket.io-client'
import { API_URL } from '../constants'
import correctSound from '../components/GameStats/correct_answer.mp3'
import wrongSound from '../components/GameStats/wrong_answer.mp3'
import Sound from 'react-sound'



class PlayerStation extends Component {

    state = {
        questionId: null,
        question: null,
        answer: [],
        activeQuestion: null,
        waitingForOtherPlayers: false,
        isAnswerCorrect: false,
        correctAnswer: ''
    }

    constructor() {
        super()
        this.socket = io(API_URL)
    }

    componentWillMount() {
        const gameId = this.props.game.id

        this.socket.on(`CURRENT_QUESTION_${gameId}`, (data) => {
            console.log('IM CALLING!')
            this.setState({ question: data.question, questionId: data.id, answer: data.answer, activeQuestion: data.activeId, waitingForOtherPlayers: false })
        })
    }

    componentWillUnmount() {
        this.socket.disconnect()
    }

    onSelect = (answerId) => {
        const answer = this.state.answer.find((ans) => ans.id === answerId)
        const correctAnswer = this.state.answer.findIndex((ans) => ans.isCorrect === true)

        this.setState({ waitingForOtherPlayers: true, isAnswerCorrect: answer.isCorrect, correctAnswer })
        this.socket.emit('SUBMIT_PLAYER_ANSWER', { playerId: this.props.player.id, activeQuestionId: this.state.activeQuestion, answerId: answerId, isCorrect: answer.isCorrect, timestamp: new Date().getTime(), gameId: this.props.game.id })
    }

    render() {
        this.socket.on(`DISCONNECT_PLAYER_${this.props.game.id}`, (data) => {
            if (data.players.findIndex((player) => player.id === this.props.player.id) > -1) {
                this.props.history.push('/game-over')
            }
        })

        this.socket.on(`WINNER_${this.props.game.id}`, (data) => {
            if (data.winner.id !== this.props.player.id) {
                this.props.history.push('/game-over')
            } else {
                this.props.history.push(`/player/winner/${data.winner.username}`)
            }
        })

        const letter = [
            'A', 'B', 'C', 'D'
        ]

        const winGif = [
            '<iframe src="https://giphy.com/embed/nqi89GMgyT3va" width="428" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nqi89GMgyT3va">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/5oGIdt1xapQ76" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-excited-5oGIdt1xapQ76">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/6AachtBbwRYm4" width="480" height="410" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/win-6AachtBbwRYm4">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/zEJRrMkDvRe5G" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/win-zEJRrMkDvRe5G">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/xbkMY5GeLGZG0" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dance-winner-xbkMY5GeLGZG0">via GIPHY</a></p>'
        ]

        const lostGif = [
            '<iframe src="https://giphy.com/embed/l3vR3gvEdsdJl26oU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bretteldredge-brett-eldredge-l3vR3gvEdsdJl26oU">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/3o7TKr3nzbh5WgCFxe" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/playboyfragrances-3o7TKr3nzbh5WgCFxe">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/8AdlIamKVYo084YL4H" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wow-beach-usa-8AdlIamKVYo084YL4H">via GIPHY</a></p>',
            '<iframe src="https://giphy.com/embed/7FgYDJAbeIkUZ4tg2d" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/aceventura-jimcarrey-whennaturecalls-shikaka-7FgYDJAbeIkUZ4tg2d">via GIPHY</a></p>',
        ]

        return (
            <div className="container-fluid">
                <div id="login" className="row login-section">
                    <div id="login-section__left" className="col-lg-8 col-md-7 col-sm-8 col-xs-10">
                        <div className="question-section">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            </div>
                            {this.state.waitingForOtherPlayers &&
                                <div className="answer-gifs">
                                    {this.state.isAnswerCorrect && <div>
                                        <div dangerouslySetInnerHTML={{ __html: winGif[Math.floor(Math.random() * (winGif.length + 1))] }} />
                                        <Sound
                                            url={correctSound}
                                            playStatus={Sound.status.PLAYING}
                                            playFromPosition={0}
                                        />
                                    </div>
                                    }
                                    {!this.state.isAnswerCorrect && <div>
                                        <div dangerouslySetInnerHTML={{ __html: lostGif[Math.floor(Math.random() * (lostGif.length + 1))] }} />
                                        <p>The correct answer is  {letter[this.state.correctAnswer]}</p>
                                        <Sound
                                            url={wrongSound}
                                            playStatus={Sound.status.PLAYING}
                                            playFromPosition={0}
                                        />
                                    </div>
                                    }
    

                                </div>
                                }
    
                            {(this.state.answer.length > 0 && !this.state.waitingForOtherPlayers) && (
                                        <div className="option-list">

                                            {this.state.answer.map((ans, index) => (
                                                <button disabled={this.state.waitingForOtherPlayers === true ? true : false} onClick={() => this.onSelect(ans.id)} key={ans.id} className={`btn btn-lg option-btn option-${letter[index]}`}>{letter[index]}{ans.answer}</button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="login-footer">
                                        <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt='codaisseur logo' />
                                    </div>
                                </div>
                    </div>
                    <div id="login-section__right" className="col-lg-4 col-md-5 col-sm-4 col-xs-2">
                                <GameStats game={this.props.game} />
                            </div>
                        </div>
                    </div>
                    )
                }
            }
            
const mapStateToProps = state => {
                        console.log(state)
    return {
                        game: state.game,
                    player: state.player
                }
            }
            
            export default connect(mapStateToProps)(withRouter(PlayerStation))
