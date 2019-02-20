import React, { Component } from 'react'
import Player from './Player'
import request from 'superagent'
import socket from '../../socketio'
import { API_URL } from '../../constants'

const baseUrl = API_URL
console.log('BASE URL =======>', API_URL)

class Players extends Component {

  state = {
    players: []
  }

  async componentDidMount() {

    const url = `${baseUrl}/game/${this.props.game.id}/players`

    await request.get(url)
    .then((result) => this.setState({players: result.body}))
    .catch((err) => console.error(err))

    socket.on(`PLAYER_JOINED_${this.props.game.id}`, (result) => {
      this.setState({ players: [...this.state.players, result.player]})
    })
  }

  render() {
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