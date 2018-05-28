'use strict'

import React, { Component } from 'react'

import Home from './Home'
import FindFlight from './FindFlight'
import Navbar from './Navbar'
import FlightBooked from './FlightBooked'

import flights from './../flights.js'
import user, {isLoggedIn} from './../user.js'
import CreateProfile from './CreateProfile';

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
      case 'create':
        Container = CreateProfile
      case 'flight-booked':
        Container = FlightBooked
        break
      default:
        Container = Home
    }

    return (
      <div>
        <Navbar user={user} isLoggedIn={isLoggedIn} />
        <Container flights={flights} />
      </div>
    )
  }
}

export default App
