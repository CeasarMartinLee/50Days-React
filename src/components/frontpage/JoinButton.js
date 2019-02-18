import React, { Component } from 'react'
import { withRouter } from 'react-router'

class JoinButton extends Component {

    joinGame = () => {
        this.props.history.push('/join')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button className="btn btn-info btn-lg btn-block login-btn" onClick={this.joinGame}>Join Game</button>
            </div>
        )
    }
}

JoinButton = withRouter(JoinButton);
export default JoinButton