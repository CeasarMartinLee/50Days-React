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
    default:
      return state
  }
}