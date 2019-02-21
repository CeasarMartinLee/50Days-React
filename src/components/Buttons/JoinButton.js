import React from 'react'
import { withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
require('./style.css')

const JoinButton = (props) => {
  return (
    <Button className='button' onClick={() => props.history.push('/join')} block size='lg'>Join Game</Button>
  )
}

export default withRouter(JoinButton)