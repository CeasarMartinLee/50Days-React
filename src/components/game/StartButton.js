import React, { Component } from 'react'
import { withRouter } from 'react-router'
import socket from '../../socketio'

class StartButton extends Component {
    startGame = async () => {
        await socket.emit('CHANGE_GAME_STATUS', {gameId: this.props.props.id, status:'Started'})

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