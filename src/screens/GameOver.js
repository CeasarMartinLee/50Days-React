import React, { Component } from 'react'
import gameOver from '../components/game/game_over.gif'
import Sound from 'react-sound'
import gameOverSound from '../components/game/game_over.mp3'
import Container, { ContainerLeft, ContainerRight } from '../components/Container'

class GameOver extends Component {
  render() {
    return (
      <Container>
        <Sound
          url={gameOverSound}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
        />
        <ContainerLeft>
          <img style={{display:'block', width: '100%'}} src={gameOver} alt="game over" />
        </ContainerLeft>
        <ContainerRight>
          <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
        </ContainerRight> 
      </Container>
    )
  }
}

export default GameOver