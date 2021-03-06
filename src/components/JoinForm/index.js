import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinPlayerToGame } from '../../actions/game'
import { withRouter } from 'react-router'
require('./join-form.css')

class JoinForm extends Component {
  state = {
    username: 'mvanleenden',
    gameCode: 8430
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
        <div className="form-group">
          <input value={this.state.username} required name="username" onChange={this.onChange} type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
        </div>
        <div className="form-group">
          <input value={this.state.gameCode} required name="gameCode" onChange={this.onChange} type="number" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Game code" />
        </div>
        <button onClick={this.onSubmit} type="submit" className="btn btn-info btn-lg btn-block join-btn">Join Game</button>
      </div>
    )
  }
}

JoinForm = withRouter(JoinForm)
export default connect(null, {joinPlayerToGame})(JoinForm)
