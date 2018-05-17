import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hola {this.props.data}</h2>
        <h3>Hola {this.props.data2}</h3>
      </div>
    )
  }
}

export default App
