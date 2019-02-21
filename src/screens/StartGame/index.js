import React, { Component } from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { API_URL } from '../../constants'
import StartGame from './StartGame'
import { createGame } from '../../actions/game'

import intro from '../../components/game/intro.mp3'
import heartbeat from '../../components/game/heartbeat.mp3'

class StartGameContainer extends Component {
  state = {
    playerJoined: false,
    url: intro
  }

  constructor() {
    super()
    this.socket = io(API_URL)
  }

  handleSongFinishedPlaying = () => {
    this.setState ({
        url: heartbeat
    })
  }

  render() {

    this.socket.on(`PLAYER_JOINED_${this.props.game.id}`, (result) => {
      this.setState({ playerJoined: true })
    })

    if (!this.props.game) {
      return (
          <div> GENERATING CODE....</div>
      )
    }

    return (<StartGame playerJoined={this.state.playerJoined || true} game={this.props.game} url={this.state.url}/>)
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, { createGame })(StartGameContainer)