'use strict'

import React, { Component } from 'react'

import Home from './Home'

class App extends Component {
  render () {
    let Container

    switch (this.props.container) {
      case 'home':
        Container = Home
        break
      default:
        Container = Home
    }

    return (
      <div>
        <Container />
      </div>
    )
  }
}

export default App
