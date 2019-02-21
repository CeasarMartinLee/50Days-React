import React from 'react'
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
            <h3>{question}</h3>
        </div>
        <div className="option-list">
          {answers.length > 0 && (
            <div>
              <button className="btn btn-lg option-btn option-A">{answers[0].answer}</button>
              <button className="btn btn-lg option-btn option-B">{answers[1].answer}</button>
              <button className="btn btn-lg option-btn option-C">{answers[2].answer}</button>
              <button className="btn btn-lg option-btn option-D">{answers[3].answer}</button>
            </div>
          )}
        </div>
        <Footer/>
      </ContainerLeft>
      <ContainerRight>
        {game && <GameStats game={game}/>}
      </ContainerRight>
    </Container>
  )
}