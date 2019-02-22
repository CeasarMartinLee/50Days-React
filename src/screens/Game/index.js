import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import { getQuestions } from '../../actions/questions'
import { API_URL } from '../../constants'
import Game from './Game'

class GameContainer extends Component {

  state = {
		questionId: null,
		question: null,
    answer: [],
    activeQuestion: null,
    timer: 15,
    winner: false
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
    
  componentWillUnmount() {
    this.socket.disconnect()
  }
    
  
  render() {

    console.log(this.state.answer, 'HUHU')
    this.socket.on(`WINNER_${this.props.game.id}`, ({winner}) => {
        this.setState({winner: true})
        this.props.history.push(`/game/winner/${winner.username}`)
    })
        
    if (!this.state) {
      return (
        <div>Loading..</div>
      )
    }

    return (
      <Game 
        question={this.state.question} 
        answers={this.state.answer} 
        game={this.props.game} 
        timer={this.state.timer}
        activeQuestion={this.state.activeQuestion}
        winner={this.state.winner}
      />
    )
  }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, { getQuestions })(withRouter(GameContainer))


// componentDidMount() {
//   setTimeout(() => {
//       this.socket.emit('GET_CURRENT_QUESTION', {gameId: this.props.game.id})
//   }, 1000)

//   setTimeout (() => {this.startCountDown()}, 2000)
// }

// nextQuestion = () => {
//   this.socket.emit('NEXT_QUESTION', {gameId: this.props.game.id, activeQuestionId: this.state.activeQuestion})
//   this.setState({ 
//       timer: 15
//   })
//   setTimeout (() => {this.startCountDown()}, 1000)
// }

// startCountDown = () => {
//   let time = this.state.timer

//   if(!this.state.winner) {
//       const start = setInterval(() => {
//           let time = this.state.timer
//           time = time - 1
//           // this.setState({ 
//           //     timer: time
//           // })
//           if (time === -1) {
//               clearInterval(start)
//               this.nextQuestion()
//           }
//       }, 900
//       )
//   }
// }

