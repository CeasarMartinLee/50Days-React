import React, { Component } from 'react'
import { createGame } from '../actions/game'
import { connect } from 'react-redux'
import Players from '../components/Players'
import StartButton from '../components/game/StartButton'
import Sound from 'react-sound'
import heartbeat from './heartbeat.mp3'
import io from 'socket.io-client'
import { API_URL } from '../constants'

class StartGame extends Component {
    state = {
        playerJoined: false
    }

    constructor() {
        super()
        this.socket = io(API_URL)
    }

    render() {

        if (!this.props.game) {
            return (
                <div> GENERATING CODE</div>
            )
        }

        this.socket.on(`PLAYER_JOINED_${this.props.game.id}`, (result) => {
            console.log(result, 'PLAYER JOINED')
            this.setState({ playerJoined: true })
        })

        return (

            <div className="container-fluid">
                <div>
                    <Sound
                        url={heartbeat}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={300}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </div>
                <div id="login" className="row login-section">
                    <div id="login-section__left" className="col-lg-7 col-md-7 col-sm-8 col-xs-10">
                        <div className="logo">
                            <p>{this.props.game.code}</p>
                            <label>Use 4 digit code to join the game</label>
                        </div>
                        <div className="join-form">
                            {this.state.playerJoined && <StartButton props={this.props.game} />}
                        </div>
                        <div className="login-footer">
                            <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
                        </div>
                    </div>
                    <div id="login-section__right" className="col-lg-5 col-md-5 col-sm-4 col-xs-2">
                        {this.props.game.id && <Players game={this.props.game} />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, { createGame })(StartGame)
