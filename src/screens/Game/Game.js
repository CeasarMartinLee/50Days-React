import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Container, {
  ContainerLeft,
  ContainerRight 
} from '../../components/Container'
import Footer from '../../components/Footer'
import Timer from '../../components/timer/timer'
import GameStats from '../../components/GameStats'

export default (props) => {
  const { question, answers, game, timer } = props
  return (
    <Container>
      <ContainerLeft>
        <Timer time={timer}/>
        <div className="question">
            <h2 style={{fontWeight: 'bolder'}}>{question}</h2>
        </div>
     
          {answers.length > 0 && (
            <Row>
              <Col style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid gray'}} sm={12}>
                <button style={{fontSize: '1.5rem', fontWeight: 'bolder'}} className="btn btn-lg option-btn option-A">A</button>
                <h1 style={{fontWeight: 'bolder'}}>{answers[0].answer}</h1>
              </Col>
              <Col style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid gray'}} sm={12}>
                <button style={{fontSize: '1.5rem', fontWeight: 'bolder'}} className="btn btn-lg option-btn option-B">B</button>
                <h1 style={{fontWeight: 'bolder'}}>{answers[1].answer}</h1>
              </Col>
              <Col style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid gray'}} sm={12}>
                <button style={{fontSize: '1.5rem', fontWeight: 'bolder'}} className="btn btn-lg option-btn option-C">C</button>
                <h1 style={{fontWeight: 'bolder'}}>{answers[2].answer}</h1>
              </Col>
              <Col style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid gray'}} sm={12}>
                <button style={{fontSize: '1.5rem', fontWeight: 'bolder'}} className="btn btn-lg option-btn option-D">D</button>
                <h1 style={{fontWeight: 'bolder'}}>{answers[3].answer}</h1>
              </Col>
            </Row>
          )}
     
        <Footer/>
      </ContainerLeft>
      <ContainerRight>
        {game && <GameStats game={game}/>}
      </ContainerRight>
    </Container>
  )
}