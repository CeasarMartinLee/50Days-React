import { combineReducers } from 'redux'
import game from './game'
import questions from './questions'


export default combineReducers({
  game,
  questions
})