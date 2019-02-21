import React from 'react'
import Sound from 'react-sound'
import PropTypes from 'prop-types'
import Container, { ContainerLeft, ContainerRight } from '../../components/Container';
import Footer from '../../components/Footer'
import Players from '../../components/Players'
import StartButton from '../../components/game/StartButton'

const StartGame =  (props) => {
  
  const { game, playerJoined, handleSongFinishedPlaying, url } = props

  return (
    <Container>
      <ContainerLeft>
        <section className="logo">
          <p>{game.code}</p>
          <label>Use 4 digit code to join the game</label>
        </section>
        <section>
          {playerJoined && <StartButton props={game} />}
        </section>
        <Footer/>
      </ContainerLeft>

      <ContainerRight>
        {game.id && <Players game={game} />}
      </ContainerRight>
      <Sound
          url={url}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
          onFinishedPlaying={handleSongFinishedPlaying}
      />
    </Container>
  )
}

StartGame.propTypes = {
  game: PropTypes.object,
  playerJoined: PropTypes.bool,
  handleSongFinishedPlaying: PropTypes.func,
  url: PropTypes.any
}

export default StartGame