import React, { Component } from 'react'
import gameOver from '../components/game/game_over.gif'
import Sound from 'react-sound'
import gameOverSound from '../components/game/game_over.mp3'

class GameOver extends Component {
  render() {
    return (
      <div>
        <Sound
          url={gameOverSound}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
        />
        <div>BETTER LUCK NEXT TIME!</div>
        <img src={gameOver} alt="game over" />
      </div>


    )
  }
}

export default GameOver