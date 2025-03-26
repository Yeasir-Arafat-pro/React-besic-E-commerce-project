import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count : 0
      }
    }

    handleInc = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDec = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    
   

  render() {
    return (
      <div>

        <h2>Count: {this.state.count}</h2>

        <button onClick={this.handleInc} disabled={this.state.count === 5 ? true : false}>+</button>
        <button onClick={this.handleDec} disabled={this.state.count === 0 ? true : false}>-</button>

      </div>
    )
  }
}
