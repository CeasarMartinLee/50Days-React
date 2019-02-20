import React, { Component } from 'react'
import request from 'superagent'
import {API_URL} from '../../constants'
import Score from './Score';
import socket from '../../socketio'
class GameStats extends Component {
  
  state = {
    scores: []
  }
  componentDidMount() {
    request.get(`${API_URL}/games/${this.props.game.id}/stats`).then((result) => {
      this.setState({ scores: result.body })
    })

    // socket.on(`PLAYER_STAT_UPDATE_${this.props.game.id}}`, (playerStat) => {
    //   console.log(playerStat)
    //   const players = this.state.scores.map(player => {
    //     if (player.id === playerStat.playerId) {
    //       player.currentScore = playerStat.score
    //     }
    //     return player
    //   })

    //   this.setState({ scores: [...players] })
    // })

  }
  
  render() {
    console.log(this.props.game.id)
    socket.on(`PLAYER_STATT_UPDATE_${this.props.game.id}}`, function(playerStat) {
      console.log(playerStat, 'STTTTTTTTT')
      const players = this.state.scores.map(player => {
        if (player.id === playerStat.playerId) {
          player.currentScore = playerStat.score
        }
        return player
      })

      this.setState({ scores: [...players] })
    })
    return(
      <div className="rankings">
          <h1>1st Round</h1>
          <div className="rankings-list">
            {this.state.scores.length > 0 && this.state.scores.map((score, index) => <Score key={score.id} index={index} {...score} />)}
          </div>
      </div>
    )
  }
}

export default GameStats