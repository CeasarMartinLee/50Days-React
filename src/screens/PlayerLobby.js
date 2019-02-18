import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayerLobbyContainer extends Component {
  render() {
    return(
      <div>LOBBY</div>
    )
  }
}

const mapStateToProps = () => {
  
}

export default connect()(PlayerLobbyContainer)