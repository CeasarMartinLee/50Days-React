import { GET_QUESTIONS_SUCCESS } from '../actions/questions'

export default (state = {}, action = {}) => {
  switch (action.type) {

    case GET_QUESTIONS_SUCCESS:
      console.log(state)
      console.log(action)
      return action.questions

    default:
      return state
  }
}