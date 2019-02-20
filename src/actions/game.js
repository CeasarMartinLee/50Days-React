import request from 'superagent'
import axios from 'axios'
import {API_URL } from '../constants'

export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'
export const JOIN_GAME = 'JOIN_GAME'
export const JOIN_GAME_FAILED = 'JOIN_GAME_FAILED'

const baseUrl = API_URL

const createGameSuccess = game => ({
    type: CREATE_GAME_SUCCESS,
    game
  })

export const createGame = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then(response => {
        console.log(response, 'CREATE GAME')
      dispatch(createGameSuccess(response.body))
    })
    .catch(console.error)
}

const joinGame = (player, game) => {
  return {
    type: JOIN_GAME,
    payload: {
      player,
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
  await axios.post(`${baseUrl}/game/join`, { username, gameCode: code})
    .then((res) => {
      saveToLocal(res.data.player.id)
      dispatch(joinGame(res.data.player, res.data.game))
    })
    .catch((err) => {
      if(err.message.includes('400')) {
        dispatch(joinGameFailed('Game not found'))
      } else {
        dispatch(joinGameFailed('Something went wrong'))
      }
    })
  
}

const saveToLocal = async (id) => {
  await localStorage.setItem('id', id)
}


export const authenticatePlayer = (gameId, playerId) => async (dispatch) => {
  console.log(gameId, playerId)
  await axios.post(`${baseUrl}/player/authenticate`, { gameId, playerId })
    .then(res => {
      // saveToLocal(res.data.player.id)
      console.log(res)
      dispatch(joinGame(res.data.score, res.data.game))
    }).catch(err =>  dispatch(joinGameFailed('Not authorized')))
}
