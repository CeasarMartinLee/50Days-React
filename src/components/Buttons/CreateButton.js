import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { createGame } from '../../actions/game'
require('./style.css')

class CreateButton extends Component {
  createGame = async () => {
    await this.props.createGame()
    this.props.history.push('/startgame')
  }

  render() {
    return ( <Button className='button' onClick={this.createGame} block size='lg'>Create Game</Button> )
  }
}

CreateButton = withRouter(CreateButton);
export default connect(null, {createGame})(CreateButton)