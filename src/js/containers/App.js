'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Home from './Home'
import FindFlight from './FindFlight'
import Navbar from './Navbar'
import FlightBooked from './FlightBooked'

import flights from './../flights.js'
import user, {isLoggedIn} from './../user.js'
import CreateProfile from './CreateProfile';
import Book from './Book';
import MyAccount from './MyAccount';

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
        break
      case 'flight-booked':
        Container = FlightBooked
        break
      case 'book':
        Container = Book
        break
      case 'my-account':
        Container = MyAccount
        break
      default:
        Container = Home
    }

    let navPortal = document.getElementById('nav_portal')

    return (
      <div>
        {
          navPortal
            ? ReactDOM.createPortal(<Navbar user={user} isLoggedIn={isLoggedIn} />, navPortal)
            : ''
        }

        <Container flights={flights} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

export default App
