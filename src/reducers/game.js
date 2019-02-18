import { CREATE_GAME_SUCCESS } from '../actions/game'

export default (state = {}, action = {}) => {
  switch (action.type) {

    case CREATE_GAME_SUCCESS:
      console.log(state)
      console.log(action)
      return action.game

    default:
      return state
  }
}