import { combineReducers } from 'redux'
import game from './game'
import questions from './questions'
import player from './player'

export default combineReducers({
  game,
  player,
  questions
})