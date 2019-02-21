import React from 'react'

export default (props) => {
  const { index, username, currentScore, disconnected } = props
  console.log(disconnected, 'DISCONNECTED***')
  return(
      <div className="player-ranking" style={{ backgroundColor: disconnected ? 'lightGray' : 'black'}}>
        <span className="rank-icon">*</span>
        <span>#{index + 1}</span>
        <span>{username}</span>
        <span>{`${currentScore} points`}</span>
      </div>
  )
}