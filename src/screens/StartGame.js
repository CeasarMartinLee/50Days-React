import React, { Component } from 'react'
import {createGame} from '../actions/game'
import {connect} from 'react-redux'
import Players from '../components/Players'
import StartButton from '../components/game/StartButton'


class StartGame extends Component {

    // componentDidMount() {
    //     this.props.createGame()
    // }

    render() {
        console.log(this.props.game, "bigscreen")
        if (!this.props.game) {
            return (
                <div> GENERATING CODE</div>
            )
        }
        return (
            <div className="container-fluid">
            <div id="login" className="row login-section">
              <div id="login-section__left" className="col-lg-7 col-md-7 col-sm-8 col-xs-10">
                <div className="logo">
                  <p>{this.props.game.code}</p>
                  <label>Use 4 digit code to join the game</label>
                </div>
                <form className="join-form">
                    <StartButton props={this.props.game}/>
                </form>
                <div className="login-footer">
                  <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
                </div>
              </div>
              <div id="login-section__right" className="col-lg-5 col-md-5 col-sm-4 col-xs-2">
                {this.props.game.id && <Players game={this.props.game}/>}
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
  })

export default connect(mapStateToProps, {createGame})(StartGame)
