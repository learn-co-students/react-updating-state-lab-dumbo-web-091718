import React, {Component} from 'react'

class DigitalClicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {timesClicked: 0 }
  }

  incrementor = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementor}>{this.state.timesClicked}</button>
      </div>
    )
  }

}

export default DigitalClicker;
