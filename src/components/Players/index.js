import React, { Component } from 'react'
import Player from './Player'
import socket from '../../socketio'
import { API_URL } from '../../constants'
import io from 'socket.io-client'

const baseUrl = API_URL

class Players extends Component {

  state = {
    players: []
  }

  async componentDidMount() {
    const url = `${baseUrl}/game/${this.props.game.id}/players`
  }

  constructor() {
    super()
    this.socket = io(API_URL)
  }

  render() {

    this.socket.on(`PLAYER_JOINED_${this.props.game.id}`, (result) => {
      if(this.state.players.findIndex((player) => player.id === result.player.id) === -1) {
        console.log('FIRE')
        this.setState({ players: [...this.state.players, result.player]})
      }
    })
    
    return (
        <div className="players">
          <div className="player-list__header">
            <h3>Players</h3>
          </div>
          <div className="player-list__header-mobile">
            <h5>{this.state.players.length} Players</h5>
            <button>
              <i className="fas fa-clipboard-list" />
            </button>
          </div>
          <div className="player-list">
            <Player players={this.state.players}/>
          </div>
        </div>
    )
  }
}

export default Players