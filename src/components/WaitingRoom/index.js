import React from 'react'
import Players from '../Players'
import Container, { ContainerLeft, ContainerRight } from '../Container'
import Footer from '../Footer'
require('./style.css')

export default (props) => {
    return (
      <Container>
        <ContainerLeft>
          <div className="lobby-info">
            <h1>Thanks for joining the game <b><i>{props.username}</i></b> 🤙</h1>
            <h2>Please wait for other players</h2>
            <img src="https://i.ibb.co/VSdbd90/01-progress.gif" alt="Waiting gif" />
            <h2>Good luck!</h2>
          </div>
          <Footer/>
        </ContainerLeft>
        <ContainerRight>
          <Players game={props.game}/>
        </ContainerRight>
      </Container>
    );
  };

  // 