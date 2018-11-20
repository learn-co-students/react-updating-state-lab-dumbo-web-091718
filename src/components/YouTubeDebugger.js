// Code YouTubeDebugger Component Here
import React, {
  Component
} from 'react'


class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeResolution = () => {
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  changeBitRate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: this.state.settings.video.resolution
        }
      }
    })
  }

  render() {
    return (
      <div >
       <button className="bitrate" onClick={this.changeBitRate}>change the bitrate </button>
       <button className="resolution" onClick={this.changeResolution}>change the resolution</button>
       
      </div>
    )
  }
}
export default YouTubeDebugger
