import request from 'superagent'
import { API_URL } from '../constants'

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'

const baseUrl = API_URL

const getQuestionsSuccess = questions => ({
    type: GET_QUESTIONS_SUCCESS,
    questions
  })

export const getQuestions = () => (dispatch) => {
  request
    .get(`${baseUrl}/questions`)
    .then(response => {
        console.log(response)
      dispatch(getQuestionsSuccess(response.body))
    })
    .catch(console.error)
}