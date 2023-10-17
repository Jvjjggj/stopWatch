import {Component} from 'react'

import './index.css'

const initialState = {timeInMinutes: 0, timeInSeconds: 0, isPlaying: false}

class Stopwatch extends Component {
  state = initialState

  timeFormate = () => {
    const {timeInSeconds} = this.state
    const min = Math.floor(timeInSeconds / 60)
    const sec = Math.floor(timeInSeconds % 60)
    const minInString = min > 9 ? min : `0${min}`
    const secInString = sec > 9 ? sec : `0${sec}`
    return `${minInString}:${secInString}`
  }

  onClickReset = () => {
    this.setState(initialState)
    clearInterval(this.timerId)
  }

  stopTheWatch = () => {
    clearInterval(this.timerId)
  }

  incrementSecondsByClick = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  increment = () => {
    const {isPlaying} = this.state
    if (!isPlaying) {
      this.timerId = setInterval(this.incrementSecondsByClick, 1000)
    }
  }

  render() {
    return (
      <div className="mainDiv">
        <h1>Stopwatch</h1>
        <div className="stopWatchDiv">
          <div className="s">
            <div className="imgTimerDiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timerPara">Timer</p>
            </div>
            <h1 className="time">{this.timeFormate()}</h1>
            <div className="btns">
              <button
                className="statrtBtn"
                type="button"
                onClick={this.increment}
              >
                Start
              </button>
              <button
                type="button"
                className="stopBtn"
                onClick={this.stopTheWatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="resetBtn"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
