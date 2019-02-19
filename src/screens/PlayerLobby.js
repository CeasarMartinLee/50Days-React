import React, { Component } from 'react'
import { authenticatePlayer } from '../actions/game'
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import WaitingRoom from '../components/WaitingRoom'
import io from 'socket.io-client'
const socketUrl = 'localhost:3000'

class PlayerLobbyContainer extends Component {

  constructor() {
    super()
    this.socket = io(socketUrl)
  }

  componentDidUpdate() {
    if(this.props.player.isConnectedToGame === false) {
      this.redirect('/')
    }
  }

  async componentDidMount() {

    if(!this.props.player.id) {
      const playerId = await localStorage.getItem('id')
      console.log('ID', playerId)

      if(!playerId) {
        this.props.history.push('/')
      }


      // const history = this.props.history
      // const id = this.props.match.params.id
      // this.socket.on(`GAME_STATUS_CHANGED_${id}`, function(data){
      //   console.log(history, 'SOCKET GAME STARTED')
      //   history.push(`/game/${id}/station`)
      // })
      
      const gameId = this.props.match.params.id
      await this.props.authenticatePlayer(gameId, playerId)
    }

    
  }




  redirect = (path) => {
    this.props.history.push(path)
  }

  
  render() {
    const history = this.props.history
    const id = this.props.match.params.id
    this.socket.on(`GAME_STATUS_CHANGED_${id}`, function(data){
      console.log(history, 'SOCKET GAME STARTED')
      history.push(`/game/${id}/station`)
    })
    
    return(
      <div>
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