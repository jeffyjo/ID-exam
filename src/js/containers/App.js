'use strict'

import React, { Component } from 'react'

import Home from './Home'
import Search from './Search'

import flights from './../flights.js'

class App extends Component {
  render () {
    let Container

    console.log(this.props.container)

    switch (this.props.container) {
      case 'home':
        Container = Home
        break
      case 'search':
        Container = Search
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
