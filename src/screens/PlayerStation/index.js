import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import { API_URL } from '../../constants'
import PlayerStation from './PlayerStation'

class PlayerStationContainer extends Component {

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

    return (
      <PlayerStation 
        game={this.props.game} 
        waitingForOtherPlayers={this.state.waitingForOtherPlayers}
        isAnswerCorrect={this.state.isAnswerCorrect}
        options={this.state.answer}
        onSelect={this.onSelect}
        correctAnswer={this.state.correctAnswer}
      />)
  }
}
            
const mapStateToProps = state => {
  return {
    game: state.game,
    player: state.player
  }
}
            
export default connect(mapStateToProps)(withRouter(PlayerStationContainer))
