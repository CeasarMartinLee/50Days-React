import React from 'react'

export default (props) => {
  console.log(props)
  return (
    props.players.map((player) => {
      return <span key={player.id} className="badge badge-pill"><i class="fas fa-trophy"></i> {player.username}</span>
    })
  )
}