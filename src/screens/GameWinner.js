import React from 'react'
import { withRouter } from 'react-router-dom'
import Sound from 'react-sound'
import closingSound from '../components/game/closing.mp3'
import winner from '../components/game/winner.gif'
import Container, { ContainerLeft, ContainerRight } from '../components/Container'
import Footer from '../components/Footer'


const GameWinner = (props) => {
  console.log(props)
  return (
    <Container>
      <Sound
        url={closingSound}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
      />
      <ContainerLeft>
        <div style={{textAlign: 'center'}}>
          <h1>The winner is {props.match.params.username}</h1>
          <h2>Thank you for playing 50Days!</h2>
        </div>
        
        <img style={{width: '100%', display: 'block'}} src={winner} alt="winner"/>
        <Footer/>
      </ContainerLeft>
      <ContainerRight>
        <img src="../../img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
      </ContainerRight> 

    </Container>
  )
}

export default withRouter(GameWinner)