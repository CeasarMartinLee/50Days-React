import React, { Component } from 'react'
import Sound from 'react-sound'
import tickingClock from './timer.mp3'
// import alarm from './alarm.mp3'
import './timer.css'



class Timer extends Component {
    state = {
        sound: tickingClock,
        position: 9000
    }   

    handleSongFinishedPlaying = () => {
        // this.setState ({
        //     sound: alarm,
        //     position: 300
        // })
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
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
                <h1 className="timer">{this.props.time}</h1>
            </div>
        )
    }
}
export default Timer
