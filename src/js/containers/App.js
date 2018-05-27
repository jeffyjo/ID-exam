'use strict'

import React, { Component } from 'react'

import Home from './Home'
import Search from './Search'
import FindFlight from './FindFlight'

import flights from './../flights.js'

class App extends Component {
  render () {
    let Container

    switch (this.props.container) {
      case 'home':
        Container = Home
        break
      case 'search':
        Container = FindFlight
        break
      default:
        Container = Home
    }

    return (
      <div>
        <Container flights={flights} />
      </div>
    )
  }
}

export default App
