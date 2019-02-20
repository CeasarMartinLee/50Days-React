import React, { Component } from 'react'
import { withRouter } from 'react-router'
import io from 'socket.io-client'
import { API_URL } from '../../constants'
class StartButton extends Component {

    constructor() {
        super()
        this.socket = io(API_URL)
    }
    startGame = async () => {
        console.log(this.props, 'STARTGAME')
        this.socket.emit('GET_CURRENT_QUESTION', {gameId: this.props.props.id})
        await this.socket.emit('CHANGE_GAME_STATUS', {gameId: this.props.props.id, status:'Started'})
 
        const id = this.props.props.id
        this.props.history.push(`/game/${id}`)
    }

    render() {
        return (
            <div>
                <button className="btn btn-info btn-lg btn-block login-btn" onClick={this.startGame}>Start Game</button>
            </div>
        )
    }
}

StartButton = withRouter(StartButton);
export default StartButton