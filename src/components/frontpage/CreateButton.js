import React, { Component } from 'react'
import { withRouter } from 'react-router'

class CreateButton extends Component {

    createGame = () => {
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
export default CreateButton