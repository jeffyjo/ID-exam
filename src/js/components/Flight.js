'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Flight extends Component {
  constructor (props) {
    super(props)

    this.state = {
      price: null
    }
  }

  componentDidMount () {

  }

  render () {
    let price = this.props.flights.reduce((price, flight) => {
      let withoutSymbol = flight.price.replace('€', '')
      let withDot = withoutSymbol.replace(',', '.')
      let asFloat = parseFloat(withDot)

      price += asFloat

      return price
    }, 0)

    return (
      <div className='m-table-item'>
        <div>
          {this.props.flights.map((flight, i) => {
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
        <div className='m-price-block'>
          <div className='m-price-block__content'>
            <label className='m-price-block__title'>Price</label>
            <h2 className='m-price-block__price'>{'€' + price}</h2>
          </div>
          <button className='a-button a-button--secondary a-button--square m-price-block__btn u-flex u-flex--center-h'>Book</button>
        </div>
      </div>
    )
  }
}

Flight.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      airline: PropTypes.string,
      airline_code: PropTypes.string,
      plane_id: PropTypes.string,
      departure_date: PropTypes.string,
      departure_time: PropTypes.string,
      duration: PropTypes.string,
      arrival_date: PropTypes.string,
      arrival_time: PropTypes.string,
      price: PropTypes.string,
      origin: PropTypes.shape({
        city: PropTypes.string,
        location: PropTypes.string,
        country: PropTypes.string,
        country_code: PropTypes.string,
        IATA: PropTypes.string,
        ICAO: PropTypes.string
      }),
      destination: PropTypes.shape({
        city: PropTypes.string,
        location: PropTypes.string,
        country_code: PropTypes.string,
        IATA: PropTypes.string,
        ICAO: PropTypes.string
      })
    })
  )
}

Flight.defaultProps = {
  flights: []
}

export default Flight
