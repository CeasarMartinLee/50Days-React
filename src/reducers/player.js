import {JOIN_GAME, JOIN_GAME_FAILED} from '../actions/game'

const initialState = {
  id: null, 
  isConnectedToGame: null, 
  errors: null,
  isEliminated: null,
  score: 0
}

export default (state = initialState, action = {} ) => {
  switch(action.type) {
    case JOIN_GAME:
      return {...state, isConnectedToGame: true, ...action.payload.player }
    case JOIN_GAME_FAILED:
      return {...state, errors: action.payload, isConnectedToGame: false }
    default:
      return state
  }
}