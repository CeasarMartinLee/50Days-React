import React, { Component } from 'react'
import request from 'superagent'
import {API_URL} from '../../constants'
import Score from './Score';
import socket from '../../socketio'
class GameStats extends Component {
  
  state = {
    stats: []
  }
  componentDidMount() {
    // fetch the stats of the game
    request.get(`${API_URL}/games/${this.props.game.id}/stats`).then((result) => {
      console.log(result.body)
      this.setState({ stats: result.body })
    })

    socket.on(`GAME_STATS_CHANGED_${this.props.game.id}`, () => {

    })

  }
  
  render() {
    return(
      <div className="rankings">
          <h1>1st Round</h1>
          <div className="rankings-list">
            {this.state.stats.length > 0 && this.state.stats.map((stat, index) => <Score key={stat.id} index={index} {...stat} />)}
          </div>
      </div>
    )
  }
}

export default GameStats