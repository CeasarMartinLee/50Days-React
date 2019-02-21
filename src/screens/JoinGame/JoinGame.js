import React from 'react'
import JoinForm from './JoinForm'
import Logo from '../../components/Logo'
import Container, { ContainerLeft, ContainerRight } from '../../components/Container'
require('./style.css')

export default () => {
  return (
    <Container>
      <ContainerLeft>
        <div className='join-section'>
          <Logo/>
          <JoinForm/>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
      </ContainerRight>
    </Container>
  )
}
