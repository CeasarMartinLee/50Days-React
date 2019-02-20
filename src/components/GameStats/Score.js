import React from 'react'

export default (props) => {
  const { index, username, currentScore } = props
  console.log(props, '<<<<<<PROPSSS')
  return(
    <div className="ranking-list__mobile">
        <div className="player-ranking">
            <span className="rank-icon">*</span>
            <span>#{index + 1}</span>
            <span>{username}</span>
            <span>{`${currentScore} points`}</span>
        </div>
    </div>
  )
}