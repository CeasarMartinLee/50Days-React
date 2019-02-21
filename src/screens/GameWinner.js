import React from 'react'
import { withRouter } from 'react-router-dom'
import Sound from 'react-sound'
import closingSound from '../components/game/closing.mp3'
import winner from '../components/game/winner.gif'


const GameWinner = (props) => {
  console.log(props)
  return (
    <div>
      <Sound
        url={closingSound}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
      />
      <h1>The winner is {props.match.params.username}</h1>
      <h2>Thank you for playing 50Days!</h2>
      <img src={winner} alt="winner"/>

    </div>
  )
}

export default withRouter(GameWinner)