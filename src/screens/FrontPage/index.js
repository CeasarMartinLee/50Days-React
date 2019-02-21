import React from 'react'
import CreateButton from '../../components/frontpage/CreateButton'
import JoinButton from '../../components/frontpage/JoinButton'
import IntroSound from '../../components/frontpage/IntroSound'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'


export default () => {
  return (
    <Container fluid={true}>
      <Row id="front-page" className='section'>
        <Col md={7} sm={8} xs={12} id="section__left">
          <section className="logo">
            <p>50Days</p>
          </section>
          <section className='buttons'>
            <CreateButton />
            <br />
            <JoinButton />
          </section>
          <section className="footer">
            <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
          </section>
        </Col>
        <Col id="section__right" md={5} sm={4} xs={12}>
          <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
        </Col>
      </Row>
      <IntroSound/>
    </Container>
  )
}