import { CREATE_GAME_SUCCESS } from '../actions/game'
import { JOIN_GAME } from './../actions/game'

const initialState = {
  level: null,
  code: null,
  id: null,
  status: null,
  players: [],
}

export default (state= initialState, action={}) => {
  switch(action.type) {
    case JOIN_GAME:
      return {...state, ...action.payload.game}
    case CREATE_GAME_SUCCESS:
      return action.game
    default:
      return state
  }
}