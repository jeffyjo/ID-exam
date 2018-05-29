'use strict'

import React, { Component } from 'react'

import flights from './../flights'

import {
  urlStringToObject,
  priceSum
} from './../utils'

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flights: [],
      step: 0
    }
  }

  componentDidMount () {
    let search = window.location.search

    search = urlStringToObject(search)

    search.ids = search.ids.split('-').map(id => {
      return parseInt(id, 10)
    })

    search.passengers = parseInt(search.passengers, 10)

    let matchingFlights = flights.filter(flight => {
      return !!~search.ids.indexOf(flight.id)
    })

    this.setState({
      flights: matchingFlights,
      passengerCount: search.passengers
    })
  }

  render () {
    let price = priceSum(this.state.flights)

    return (
      <div className='t-book'>
        <div className='t-book__heading'>
          <h2>Book you flight</h2>
          <div class="m-progress">
            {
              Array.from({length: 4}).map((n, i) => {
                let classes = 'm-progress__dot'
                classes += ` m-progress__dot--${i + 1}`
                if (i <= this.state.step) {
                  classes += ' m-progress__dot--active'
                }
                return (
                  <span key={i} className={classes}></span>
                )
              })
            }
          </div>
        </div>
        <div className='m-table-item u-pill u-pill--bottom u-pill--top'>
          <div>
            {this.state.flights.map((flight, i) => {
              let duration = flight.duration
              duration = duration.replace(':', '.')
              duration = parseInt(duration, 10).toFixed(1) + 'h'

              return (
                <div key={i} className='m-table-item__inner'>
                  <div className='m-table-item__row m-table-item__row--top'>
                    <div className='m-table-item__header u-grid u-grid--3-cols'>
                      <label className='m-table-item__header-item'><span className='m-table-item__header-item--bg-white'>{flight.origin['IATA']}</span></label>
                      <label className='m-table-item__header-item'>
                        <span className='m-table-item__header-item--bg-grey'>{duration}</span>
                      </label>
                      <label className='m-table-item__header-item'><span className='m-table-item__header-item--bg-white'>{flight.destination['IATA']}</span></label>
                    </div>
                  </div>
                  <div className='m-table-item__row u-grid u-grid--3-cols'>
                    <div className='m-table-item__row-content u-flex u-flex--column'>
                      <label>{flight.origin.city}</label>
                      <label>{flight.departure_time}</label>
                    </div>
                    <div />
                    <div className='m-table-item__row-content u-flex u-flex--column'>
                      <label>{flight.destination.city}</label>
                      <label>{flight.arrival_time}</label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='m-price-block u-pill u-pill--right'>
            <div className='m-price-block__content'>
              <label className='m-price-block__title'>Price</label>
              <h2 className='m-price-block__price'>{'€' + (price * this.state.passengerCount).toFixed(2)}</h2>
            </div>
            <a href='search.html' className='a-button a-button--secondary a-button--square m-price-block__btn u-flex u-flex--center-h'>Change</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Book
