import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createGame } from '../../actions/game'

class CreateButton extends Component {

    createGame = async () => {
        await this.props.createGame()
        this.props.history.push('/startgame')
    }

    render() {
        return (
            <div>
                <button className="btn btn-info btn-lg btn-block login-btn" onClick={this.createGame}>Create Game</button>
            </div>
        )
    }
}

CreateButton = withRouter(CreateButton);
export default connect(null, {createGame})(CreateButton)