import React, { Component } from 'react'
import { connect } from 'react-redux'
import './frontpage.css'
import socket from '../socketio'

class PlayerStation extends Component {

	state = {
		questionId: null,
		question: null,
        answer: [],
        activeQuestion: null,
        waitingForOtherPlayers: false
	}
	
	componentWillMount() {
		const gameId = this.props.game.id
		
		socket.on(`CURRENT_QUESTION_${gameId}`, (data) => {
			this.setState({ question: data.question, questionId: data.id, answer: data.answer, activeQuestion: data.activeId, waitingForOtherPlayers: false})
		})
    }
    
    onSelect = (answerId) => {
        const answer = this.state.answer.find((ans) => ans.id === answerId)

        if(!answer.isCorrect) {
            alert('WRONG!')
        } else {
            alert('CORRECT')
        }

        this.setState({ waitingForOtherPlayers: true})
        socket.emit('SUBMIT_PLAYER_ANSWER', { playerId: this.props.player.id, activeQuestionId: this.state.activeQuestion, answerId: answerId, isCorrect: answer.isCorrect, timestamp: new Date().getTime(), gameId: this.props.game.id})
    }

    render() {
        const letter = [
            'A', 'B', 'C', 'D'
        ]
        return (
            <div className="container-fluid">
                <div id="login" className="row login-section">
                    <div id="login-section__left" className="col-lg-8 col-md-7 col-sm-8 col-xs-10">
                        <div className="question-section">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            </div>
                            <div className="question">
                           
                            </div>
                            {this.state.answer.length > 0 && (
                                <div className="option-list">
                                    
                                    {this.state.answer.map((ans, index) => (
                                        <button disabled={this.state.waitingForOtherPlayers === true ? true: false} onClick={() => this.onSelect(ans.id)} key={ans.id} className={`btn btn-lg option-btn option-${letter[index]}`}>{letter[index]}{ans.answer}</button>
                                    ))}
                                </div>
                            )}
                            
                            <div className="login-footer">
                                <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt='codaisseur logo'/>
                            </div>
                        </div>
                    </div>
                    <div id="login-section__right" className="col-lg-4 col-md-5 col-sm-4 col-xs-2">
                        <div className="rankings">
                            <h1>Final Round</h1>
                            {/* Current player ranking */}
                            <div className="ranking-list__mobile">
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#1</span>
                                    <span>Alita</span>
                                    <span>3450 points</span>
                                </div>
                            </div>
                            {/* All players including current player */}
                            <div className="rankings-list">
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#1</span>
                                    <span>Alita</span>
                                    <span>3450 points</span>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(PlayerStation)
