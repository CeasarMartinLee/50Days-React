import axios from 'axios'
import {HashRouterProps} from 'react-router-dom'

export const JOIN_GAME = 'JOIN_GAME'
export const JOIN_GAME_FAILED = 'JOIN_GAME_FAILED'

const joinGame = (id, game) => {
  return {
    type: JOIN_GAME,
    payload: {
      id,
      game
    }
  }
}

const joinGameFailed = (message) => {
  return {
    type: JOIN_GAME_FAILED,
    payload: message
  }
}

export const joinPlayerToGame = (username, code) => async (dispatch) => {
  await axios.post('http://localhost:3000/game/join', { username, gameCode: code})
    .then((res) => {
      localStorage.setItem('id', res.data.user)
      console.log(res)
      dispatch(joinGame(res.data.user, res.data.game))
    })
    .catch((err) => {
      if(err.message.includes('400')) {
        dispatch(joinGameFailed('Game not found'))
      } else {
        dispatch(joinGameFailed('Something went wrong'))
      }
    })
  
}