'use strict'

import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import PropTypes from 'prop-types'

import SelectLocation from './SelectLocation'

import {
  removeDuplicateObjectsByKey
} from './../utils'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaults: {
        origin: null,
        destination: null,
        departure_date: moment(),
        arrival_date: moment().add(1, 'days'),
        passengerCount: null
      },
      options: {
        origin: [],
        destination: [],
        departure_date: [],
        arrival_date: [],
        passengerCount: []
      },
      optionsFiltered: {
        origin: [],
        destination: []
      },
      flightParams: {
        origin: null,
        destination: null,
        departure_date: null,
        arrival_date: null,
        passengerCount: null
      },
      types: [
        'oneWay',
        'twoWay',
        'multi'
      ]
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (e) {
    e.preventDefault()
  }

  componentDidMount () {
    let options = this.props.flights
      .reduce((options, flight) => {
        for (let key of Object.keys(options)) {
          if (flight.hasOwnProperty(key)) {
            options[key].push(flight[key])
          }
        }
        return options
      }, {
        origin: [],
        destination: []
      })

    options.origin = removeDuplicateObjectsByKey(options.origin, 'IATA')
    options.destination = removeDuplicateObjectsByKey(options.destination, 'IATA')

    this.setState({
      options: Object.assign({}, this.state.options, options),
      optionsFiltered: Object.assign({}, this.state.optionsFiltered, options)
    })
  }

  render () {
    // let flights = this.filterFlightsAvailable(this.props.flights)
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <SelectLocation type='origin' locations={this.state.options.origin}/>
            <SelectLocation type='destination' locations={this.state.options.origin}/>
            
          </div>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
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

Search.defaultProps = {
  flights: []
}

export default Search
