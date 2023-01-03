import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
