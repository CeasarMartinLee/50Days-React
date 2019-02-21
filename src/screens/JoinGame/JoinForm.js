import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinPlayerToGame } from '../../actions/game'
import { withRouter } from 'react-router'
import { Form, Button } from 'react-bootstrap'
require('./style.css')

class JoinForm extends Component {
  state = {
    username: '',
    gameCode: ''
  }

  onChange =  (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = async() => {
    this.props.joinPlayerToGame(this.state.username, parseInt(this.state.gameCode))
  }

  render() {
    return(
      <div className="join-form">
        <Form.Group>
          <Form.Control type="text" name='username' required={true} value={this.state.username} onChange={this.onChange} placeholder="Username" size='lg' />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name='gameCode' required={true} value={this.state.gameCode} onChange={this.onChange} placeholder="Game Code" size='lg' />
        </Form.Group>
        <Button className='button' block={true} size='lg' onClick={this.onSubmit}>Join Game</Button>
      </div>
    )
  }
}

JoinForm = withRouter(JoinForm)
export default connect(null, {joinPlayerToGame})(JoinForm)
