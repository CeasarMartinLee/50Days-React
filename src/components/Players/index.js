import React, { Component } from 'react'
import Player from './Player';

class Players extends Component {
  render() {
    return (
        <div className="players">
          <div className="player-list__header">
            <h3>Players</h3>
          </div>
          <div className="player-list__header-mobile">
            <h5>35 Players</h5>
            <button>
              <i className="fas fa-clipboard-list" />
            </button>
          </div>
          <div className="player-list">
            <Player/>
          </div>
        </div>
    )
  }
}

export default Players