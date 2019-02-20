import React, { Component } from 'react'
import { connect } from 'react-redux'
import './frontpage.css'
import socket from '../socketio'

class PlayerStation extends Component {

	state = {
		questionId: null,
		question: null,
		answer: []
	}
	
	componentWillMount() {
		const gameId = this.props.game.id
		
		socket.on(`CURRENT_QUESTION_${gameId}`, (data) => {
			this.setState({ question: data.question, questionId: data.id, answer: data.answer})
		})
	}

	componentDidMount() {
		console.log(this.props.game)
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
																	<button key={ans.id} className={`btn btn-lg option-btn option-${letter[index]}`}>{letter[index]}{ans.answer}</button>
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
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#2</span>
                                    <span>John</span>
                                    <span>3450 points</span>
                                </div>
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#3</span>
                                    <span>Peter</span>
                                    <span>3450 points</span>
                                </div>
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#4</span>
                                    <span>Peter</span>
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
	return {
		game: state.game
	}
}

export default connect(mapStateToProps)(PlayerStation)
