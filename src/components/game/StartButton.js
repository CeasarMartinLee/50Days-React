import React, { Component } from 'react'
import { withRouter } from 'react-router'

class StartButton extends Component {

    startGame = () => {
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