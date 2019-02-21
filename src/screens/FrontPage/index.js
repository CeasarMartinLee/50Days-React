import React from 'react'
import CreateButton from '../../components/Buttons/CreateButton'
import JoinButton from '../../components/Buttons/JoinButton'
import IntroSound from '../../components/frontpage/IntroSound'
import Container, { ContainerLeft, ContainerRight } from '../../components/Container'
import './style.css'
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';


export default () => {
  return (
    <Container fluid={true}>

      <ContainerLeft>
        <Logo/>
        <section className='buttons'>
          <CreateButton/>
          <br />
          <JoinButton />
        </section>
        <Footer/>
      </ContainerLeft>
      <ContainerRight>
        <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
      </ContainerRight>
      <IntroSound/>
    </Container>
  )
}