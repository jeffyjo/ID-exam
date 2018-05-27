'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import SelectLocation from './../components/SelectLocation'
import SelectDate from './../components/SelectDate'
import ToggleFlightMode from './../components/ToggleFlightMode'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import {
  removeDuplicateObjectsByKey
} from './../utils'

class FindFlight extends Component {
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
      modes: [
        'return',
        'one-way',
        'multi'
      ],
      currentMode: 'return'
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.filterFlightsAvailable = this.filterFlightsAvailable.bind(this)
    this.setFlightParams = this.setFlightParams.bind(this)
    this.filterByParam = this.filterByParam.bind(this)
    this.onModeToggle = this.onModeToggle.bind(this)

    this.form = React.createRef()
  }

  onFormSubmit (e) {
    e.preventDefault()

    this.setFlightParams()
  }

  setFlightParams () {
    let form = this.form.current

    if (!form) return void 0

    let flightParams = Object.keys(this.state.flightParams).reduce((flightParams, param) => {
      let input = form.querySelector(`#input_${param}`)
      if (input) {
        let value = input.value
        flightParams[param] = value
      }

      return flightParams
    }, {})

    console.log(flightParams)

    this.setState({
      flightParams: flightParams
    })
  }

  onModeToggle (mode) {
    this.setState({
      currentMode: mode
    })
  }

  filterByParam (param) {
    if (param === 'departure_date' || param === 'arrival_date') {
      return (flight) => {
        return flight[param] === this.state.flightParams[param]
      }
    } else if (param === 'origin' || param === 'destination') {
      return (flight) => {
        return flight[param]['IATA'] === this.state.flightParams[param]
      }
    } else {
      return (flight) => flight
    }
  }

  filterFlightsAvailable (flights) {
    let params = this.state.flightParams

    let flightsFiltered = flights

    for (let key of Object.keys(params)) {
      if (params[key]) {
        flightsFiltered = flightsFiltered.filter(this.filterByParam(key))
      }
    }

    return flightsFiltered
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
    let flights = this.filterFlightsAvailable(this.props.flights)
    console.log(flights)
    return (
      <div id='search'>
        <ToggleFlightMode onToggle={this.onModeToggle} options={this.state.modes} currentOption={this.state.currentMode} />
        <form className='o-search-form' method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
          <div className='o-search-form__row u-grid u-grid--4-cols'>

            <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'>
              <SelectLocation type='origin' locations={this.state.options.origin}/>
            </div>
            <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'>
              <SelectLocation type='destination' locations={this.state.options.origin}/>
            </div>
            <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'>
              <SelectDate type='departure_date' dates={[]}/>
            </div>
            <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'>
              <SelectDate type='arrival_date' dates={[]}/>
            </div>

          </div>
          <button className='o-search-form__submit a-button a-button--primary a-button--circle-lg' type='submit' />
        </form>
      </div>
    )
  }
}

FindFlight.propTypes = {
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

FindFlight.defaultProps = {
  flights: []
}

export default FindFlight
