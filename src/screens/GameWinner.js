import React from 'react'
import { withRouter } from 'react-router-dom'

const GameWinner =  (props) => {
  console.log(props)
  return (
    <div>
      <h1>The winner is {props.match.params.username}</h1>
    </div>
  )
}

export default withRouter(GameWinner)