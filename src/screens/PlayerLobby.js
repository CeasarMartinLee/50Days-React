import React, { Component } from 'react'
import { authenticatePlayer } from '../actions/game'
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import WaitingRoom from '../components/WaitingRoom'

class PlayerLobbyContainer extends Component {

  async componentDidMount() {

    if(this.props.player.isConnectedToGame === false) {
      this.redirect()
    }

    if(!this.props.player.id) {
      const playerId = await localStorage.getItem('id')

      if(!playerId) {
        this.props.history.push('/')
      }
  
      const gameId = this.props.match.params.id
      this.props.authenticatePlayer(gameId, playerId)
    }
  }

  redirect = () => {
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        {this.props.player.isConnectedToGame === false && this.redirect()}
        {this.props.player.isConnectedToGame === true && <WaitingRoom username={this.props.player.username}/>}
        {this.props.player.isConnectedToGame === null && <div>Checking if you are authenticated</div>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    game: state.game
  }
}

export default withRouter(connect(mapStateToProps, {authenticatePlayer})(PlayerLobbyContainer))