import React, { Component } from 'react'
import request from 'superagent'
import io from 'socket.io-client'
import {API_URL} from '../../constants'
import Score from './Score';

class GameStats extends Component {
  
  state = {
    scores: [],
    level: null,
    disconnected: []
  }

  constructor() {
    super()
    this.socket = io(API_URL)
  }

  componentDidMount() {
    request.get(`${API_URL}/games/${this.props.game.id}/stats`).then((result) => {
      this.setState({ scores: result.body, level: this.props.game.level })
    })
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }

  render() {
    this.socket.on(`GAME_LEVEL_UP_${this.props.game.id}`, (level) => {
      this.setState({ level })
    })

    this.socket.on(`PLAYER_STAT_UPDATE_${this.props.game.id}`, (playerStat) => {
      let players = this.state.scores.map(player => {
        if (player.id === playerStat.playerId) {
          player.currentScore = playerStat.score
        }
        return player
      })

      const sortedPlayer = players.sort((a, b) => b.currentScore - a.currentScore)
      this.setState({ scores: [...sortedPlayer] })
    })

    this.socket.on(`DISCONNECT_PLAYER_${this.props.game.id}`, (data) => {
      this.setState({disconnected: data.players})
    })

    return(
      <div className="rankings">
          <h1>Round {this.state.level && this.state.level}</h1>
          <div className="rankings-list">
            {this.state.scores.length > 0 && this.state.scores.map((score, index) => 
              <Score 
                key={score.id} 
                index={index} 
                {...score} 
                disconnected={this.state.disconnected.findIndex((player) => player.id === score.id) > -1}/>)}
          </div>
      </div>
    )
  }
}

export default GameStats