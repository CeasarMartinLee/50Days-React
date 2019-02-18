import { JOIN_GAME } from './../actions/game'
const initialState = {
  level: null,
  code: null,
  id: null,
  status: null,
  players: [],
  // currentQuestion: {
  //   question: null,
  //   choices: null
  // }
}
export default (state= initialState, action={}) => {

  switch(action.type) {
    case JOIN_GAME:
    return {...state, ...action.payload.game}
  }
  return state
}