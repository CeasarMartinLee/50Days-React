import {JOIN_GAME, JOIN_GAME_FAILED} from '../actions/game'

const initialState = {
  id: null, 
  isConnectedToGame: false, 
  errors: null,
  isEliminated: false,
  score: 0
}

export default (state = initialState, action = {} ) => {
  switch(action.type) {
    case JOIN_GAME:
      return {...state, id: action.payload.player, isConnectedToGame: true, errors: null }
    case JOIN_GAME_FAILED:
      return {...state, errors: action.payload, isConnectedToGame: false }
    default:
      return state
  }
}