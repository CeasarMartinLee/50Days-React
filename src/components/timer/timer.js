import React, { Component } from 'react'
import Sound from 'react-sound'
import tickingClock from './timer.mp3'
import { API_URL } from '../../constants'
import io from 'socket.io-client'
import './timer.css'



class Timer extends Component {
    state = {
        sound: tickingClock,
        position: 9000,
        timer: 15
    }   

    componentDidMount() {
        setTimeout(() => {
            this.socket.emit('GET_CURRENT_QUESTION', {gameId: this.props.game.id})
        }, 1000)
    
        setTimeout (() => {this.startCountDown()}, 2000)
    }

    startCountDown = () => {
        if(!this.state.winner) {
            const start = setInterval(() => {
                let time = this.state.timer
                time = time - 1
                this.setState({ 
                    timer: time
                })
                if (time === -1) {
                    clearInterval(start)
                    this.nextQuestion()
                }
            }, 900
            )
        }
    }

    constructor() {
        super()
        this.socket = io(API_URL)
    }

    componentWillUnmount() {
        this.socket.disconnect()
    }

    nextQuestion = () => {
        this.socket.emit('NEXT_QUESTION', {gameId: this.props.game.id, activeQuestionId: this.props.activeQuestion})
        this.setState({ 
            timer: 15
        })
        setTimeout (() => {this.startCountDown()}, 1000)
    }

    render() {
        return (
            <div className="timerBox">
                <Sound
                    url={this.state.sound}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={this.state.position}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                />
                <h1 className="timer">{this.state.timer}</h1>
            </div>
        )
    }
}
export default Timer
