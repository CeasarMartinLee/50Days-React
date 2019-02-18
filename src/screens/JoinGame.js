import React, { Component } from 'react'
import JoinGame from '../components/JoinGame'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class JoinGameContainer extends Component {

  componentDidUpdate() {
    if(this.props.player.isConnectedToGame) {
      this.props.history.push(`/game/${this.props.game.id}/lobby`)
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <JoinGame/>
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

export default withRouter(connect(mapStateToProps)(JoinGameContainer))

