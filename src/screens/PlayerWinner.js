import React from 'react'
import Sound from 'react-sound'
import applause from '../components/game/applause.mp3'
import congrats from '../components/game/congrats.gif'

export default () => {
  return (
    <div>
      <Sound
        url={applause}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
      />
      <h1>You Win!!</h1>
      <img src={congrats} alt="winner"/>

    </div>
  )
}