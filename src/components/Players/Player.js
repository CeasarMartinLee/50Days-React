import React, { Component } from 'react'

export default (props) => {
  console.log(props)
  return (
    props.players.map((player) => {
      return <span key={player.id} className="badge badge-pill"><i className="fas fa-trophy"></i> {player.username}</span>
    })
  )
}

// class Player extends Component {
//   state = {
//     players: []
//   }

//   componentDidMount() {
//     socket.on(`PLAYER_JOINED_${this.props.game.id}`, (result) => {
//       if(this.state.players.findIndex((player) => player.id === result.player.id) === -1) {
//         console.log('FIRE')
//         // players.push(result.player)
//         this.setState({ players: [...this.state.players, result.player]})
//       }
//     })
//   }

//   render() {
//     return(
//       this.state.players.map((player) => {
//         return <span key={player.id} className="badge badge-pill"><i className="fas fa-trophy"></i> {player.username}</span>
//       })
//     )
//   }
// }

// export default Player