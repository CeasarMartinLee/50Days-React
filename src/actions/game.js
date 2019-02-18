import request from 'superagent'

export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'

const baseUrl = 'http://localhost:3000'

const createGameSuccess = game => ({
    type: CREATE_GAME_SUCCESS,
    game
  })

export const createGame = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then(response => {
        console.log(response)
      dispatch(createGameSuccess(response.body))
    })
    .catch(console.error)
}