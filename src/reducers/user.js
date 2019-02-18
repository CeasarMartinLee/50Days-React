import {JOIN_GAME} from '../actions/game'

export default (state = null, action = {} ) => {
  switch(action.type) {
    case JOIN_GAME:
      return action.payload
    default:
      return state
  }
}