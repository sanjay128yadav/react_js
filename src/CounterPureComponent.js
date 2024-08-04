import React, { PureComponent } from 'react'

export default class CounterPureComponent extends PureComponent {
  render() {
    console.log("Counter Pure Component Rendered!");
    return (
      <>
        <h4>Counter: {this.props.count}</h4>
        <button onClick={this.props.onIncrement}>Update</button>
      </>
    )
  }
}
