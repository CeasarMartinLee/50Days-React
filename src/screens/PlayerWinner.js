import React from 'react'
import Sound from 'react-sound'
import applause from '../components/game/applause.mp3'
import congrats from '../components/game/congrats.gif'
import Container, { ContainerLeft } from '../components/Container'

export default () => {
  return (
    <Container>
      <ContainerLeft>
        <Sound
          url={applause}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
        />
        <div style={{textAlign: 'center'}}>
          <h1>You Win!!</h1>
          <img style={{width: '99%', display: 'block'}} src={congrats} alt="winner"/>
        </div>
      </ContainerLeft>
    </Container>
  )
}