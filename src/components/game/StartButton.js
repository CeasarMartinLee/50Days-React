import React, { Component } from 'react'
import { withRouter } from 'react-router'
import io from 'socket.io-client'
import { API_URL } from '../../constants'
class StartButton extends Component {

    constructor() {
        super()
        this.socket = io(API_URL)
    }
    startGame = () => {
        console.log(this.props, 'STARTGAME')
        this.socket.emit('CHANGE_GAME_STATUS', {gameId: this.props.props.id, status:'Started'})
        const code = this.props.props.code
        this.props.history.push('/game/' + code)
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