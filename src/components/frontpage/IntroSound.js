import React, { Component } from 'react'
import Sound from 'react-sound'
import intro from './intro.mp3'


class IntroSound extends Component {
    // state = {
    //     sound: Sound.status.STOPPED,
    //     position: 0
    //   }
    
      componentDidMount() {
        // setTimeout(() => {
            setInterval(() => {

            this.startSound()

        //   this.setState({
        //     url: intro,
        //     sound: Sound.status.PLAYING,
        //     position: 0
        //   })
        }, 10000)
        // this.startSound()
      }

    //   handleSongLoading = () => {
    //     this.setState({sound: Sound.status.PLAYING})
    //     console.log("song is loading")
    //   }

    //   handleSongPlaying = () => {
    //     this.setState({sound: Sound.status.PLAYING})
    //   }
    startSound = () => {
        this.audio = new Audio(intro);
        // this.audio.play();

        // this.setState({sound: Sound.status.PLAYING})
        // let audio = new Audio(intro);

        // return (
        //     // play HTMLAudioElement
        //     audio.play()
        //    )

    }
    
    //   handleSongFinishedPlaying = () => {
    //     this.setState({
    //       url: intro,
    //       sound: Sound.status.STOPPED,
    //       position: 1000
    //     })
    //   }

    render() {
        console.log(this.state)
        console.log(this.props)
        // this.startSound()

        return (
            <div>
            {/* <Sound
              url={intro}
              playStatus={this.state.sound}
              playFromPosition={this.state.position}
            //   onLoading={this.handleSongLoading}
              onFinishedPlaying={this.handleSongFinishedPlaying}
              onLoad={this.startSound}
              
            /> */}

          </div>
        )
    }
}
export default IntroSound
