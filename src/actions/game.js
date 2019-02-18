import axios from 'axios'

export const JOIN_GAME = 'JOIN_GAME'

const joinGame = (id) => {
  return {
    type: JOIN_GAME,
    payload: id
  }
}

export const joinPlayerToGame = (username, code) => async (dispatch) => {
  await axios.post('http://localhost:3000/game/join', { username, gameCode: code})
    .then((res) => {
      localStorage.setItem('id', res.data.user)
      dispatch(joinGame(res.data.user))
    })
    .catch((err) => {
      console.log(err)
    })
  
}