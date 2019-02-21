import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions'
import io from 'socket.io-client'
import {API_URL } from '../constants'
import './frontpage.css'
import GameStats from '../components/GameStats';
import Timer from '../components/timer/timer';


class Game extends Component {

    state = {
		questionId: null,
		question: null,
        answer: [],
        activeQuestion: null,
        timer: 20
	}

	constructor() {
        super()
        this.socket = io(API_URL)
	}
	
	componentWillMount() {
		const gameId = this.props.game.id
		this.socket.on(`CURRENT_QUESTION_${gameId}`, (data) => {
			this.setState({ question: data.question, questionId: data.id, answer: data.answer, activeQuestion: data.activeId})
		})
	}
    
    componentDidMount() {
        this.socket.emit('GET_CURRENT_QUESTION', {gameId: this.props.game.id})
        setTimeout (() => {this.startCountDown()}, 2000)

    }

    nextQuestion = () => {
        this.socket.emit('NEXT_QUESTION', {gameId: this.props.game.id, activeQuestionId: this.state.activeQuestion})
        this.setState({ 
            timer: 20
        })
        setTimeout (() => {this.startCountDown()}, 2000)

    }

    startCountDown = () => {
        const start = setInterval(() => {
            let time = this.state.timer
            time = time - 1
            this.setState({ 
                timer: time
            })
            if (time === -1) {
                clearInterval(start)
                this.nextQuestion()
            }
        }, 1000
        )

    }

    render() {
        this.socket.on(`WINNER_${this.props.game.id}`, (winner) => {
            console.log('THERE IS A WINNER', winner)
        })
        
        if (!this.state) {
            return (
                <div>Loading..</div>
            )
        }
        return (
            <div className="container-fluid">
                                        <div>
                                <Timer time={this.state.timer}/>
                            </div>
                <div id="login" className="row login-section">
                    <div id="login-section__left" className="col-lg-8 col-md-7 col-sm-8 col-xs-10">
                        <div className="question-section">

                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            </div>
                            <div className="question">
                                <h3>{this.state.question}</h3>
                            </div>
                            <div className="option-list">
                                {this.state.answer.length > 0 && (
                                    <div>
                                        <button className="btn btn-lg option-btn option-A">{this.state.answer[0].answer}</button>
                                        <button className="btn btn-lg option-btn option-B">{this.state.answer[1].answer}</button>
                                        <button className="btn btn-lg option-btn option-C">{this.state.answer[2].answer}</button>
                                        <button className="btn btn-lg option-btn option-D">{this.state.answer[3].answer}</button>
                                    </div>
                                )}
                                
                            </div>
                            <div>
                                <br/><button onClick={this.nextQuestion}>NEXT</button>
                            </div>
                            {/* <div className="login-footer">
                                <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
                            </div> */}
                        </div>
                    </div>
                    <div id="login-section__right" className="col-lg-4 col-md-5 col-sm-4 col-xs-2">
                        {this.props.game && <GameStats game={this.props.game}/>}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, { getQuestions })(Game)
