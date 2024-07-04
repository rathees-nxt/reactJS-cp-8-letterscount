// Write your code here.
import {Component} from 'react'
import './index.css'

class LetersCalculator extends Component {
  state = {inputValue: ''}

  countValue = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    const totalCount = inputValue.length
    return (
      <div className="letter-calculator-app">
        <div className="letter-calculator-container">
          <div className="letter-calculator-txt-con">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="input" className="label-txt">
                Enter the phrase
              </label>
              <input
                id="input"
                className="calculator-input"
                type="text"
                onChange={this.countValue}
                placeholder="Enter the phrase"
                value={inputValue}
              />
            </div>
            <p className="para-count">No.of letters: {totalCount}</p>
          </div>
          <div>
            <img
              className="calculator-img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LetersCalculator
