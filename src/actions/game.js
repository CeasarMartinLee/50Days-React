import axios from 'axios'

export const JOIN_GAME = 'JOIN_GAME'
export const JOIN_GAME_FAILED = 'JOIN_GAME_FAILED'

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
  await axios.post('http://localhost:3000/game/join', { username, gameCode: code})
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
  await axios.post('http://localhost:3000/player/authenticate', { gameId, playerId })
    .then(res => {
      // saveToLocal(res.data.player.id)
      console.log(res)
      dispatch(joinGame(res.data.score, res.data.game))
    }).catch(err =>  dispatch(joinGameFailed('Not authorized')))
}

// 