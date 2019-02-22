import React from 'react'
import PropTypes from 'prop-types'
import Sound from 'react-sound'
import { Button } from 'react-bootstrap'
import Container, { ContainerLeft, ContainerRight } from '../../components/Container'
import GameStats from '../../components/GameStats'
import Footer from '../../components/Footer'
import correctSound from '../../components/GameStats/correct_answer.mp3'
import wrongSound from '../../components/GameStats/wrong_answer.mp3'


const winGif = [
  '<iframe src="https://giphy.com/embed/nqi89GMgyT3va" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/5oGIdt1xapQ76" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/6AachtBbwRYm4" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/zEJRrMkDvRe5G" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/xbkMY5GeLGZG0" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
]

const lostGif = [
  '<iframe src="https://giphy.com/embed/l3vR3gvEdsdJl26oU" width="100%" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/3o7TKr3nzbh5WgCFxe" width="100%" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/8AdlIamKVYo084YL4H" width="100%" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '<iframe src="https://giphy.com/embed/7FgYDJAbeIkUZ4tg2d" width="100%" height="auto"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
]

const letter = [
  'A', 'B', 'C', 'D'
]

const PlayerStation = (props) => {
  const { waitingForOtherPlayers, isAnswerCorrect, options, onSelect, game, correctAnswer } = props

  return (
    <Container>
      <ContainerLeft>
        <div style={{paddingTop: '10%'}} className='question-section'>
        
          {waitingForOtherPlayers &&
            <div className="answer-gifs">
              {isAnswerCorrect && <div>
               
                  <div style={{width: '100%', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: winGif[Math.floor(Math.random() * (winGif.length))] }} />
                  
                  <Sound
                      url={correctSound}
                      playStatus={Sound.status.PLAYING}
                      playFromPosition={0}
                  />
              </div>}
              {!isAnswerCorrect && <div>
                  <div style={{width: '100%', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: lostGif[Math.floor(Math.random() * (lostGif.length))] }} />
                  <p>The correct answer is  {letter[correctAnswer]}</p>
                  <Sound
                      url={wrongSound}
                      playStatus={Sound.status.PLAYING}
                      playFromPosition={0}
                  />
              </div>}
            </div>
          }

          {(options.length > 0 && !waitingForOtherPlayers) && (
            <div className="option-list">
                {options.map((ans, index) => (
                    <Button 
                      disabled={waitingForOtherPlayers === true ? true : false}
                      onClick={() => onSelect(ans.id)} key={ans.id}
                      className={`option-${letter[index]}`}
                      size='lg'
                      >
                      {letter[index]}
                    </Button>
                ))}
            </div>
          )}
          <Footer/>
        </div>
      </ContainerLeft>

      <ContainerRight>
        <GameStats game={game} />
      </ContainerRight>
    </Container>
  )
}

PlayerStation.propTypes = {
  waitingForOtherPlayers: PropTypes.bool,
  isAnswerCorrect: PropTypes.bool,
  options: PropTypes.array, 
  onSelect: PropTypes.func,
  game: PropTypes.object,
  correctAnswer: PropTypes.any
}

// <div className="progress">
// <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
// </div>

export default PlayerStation