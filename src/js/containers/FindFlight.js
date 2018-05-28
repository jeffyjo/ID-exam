'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import SelectLocation from './../components/SelectLocation'
import SelectDate from './../components/SelectDate'
import ToggleFlightMode from './../components/ToggleFlightMode'
import Flight from './../components/Flight'

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
      currentMode: 'one-way',
      sorts: [
        'cheapest',
        'fastest'
      ],
      currentSort: 'cheapest',
      filters: [
        'all',
        'direct',
        'joining'
      ],
      currentFilter: 'all'
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.filterFlightsAvailable = this.filterFlightsAvailable.bind(this)
    this.setFlightParams = this.setFlightParams.bind(this)
    this.filterByParam = this.filterByParam.bind(this)
    this.filterByParams = this.filterByParams.bind(this)
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

  filterByParams (flights, params) {
    let flightsFiltered = flights

    for (let key of Object.keys(params)) {
      if (params[key]) {
        flightsFiltered = flightsFiltered.filter(this.filterByParam(key))
      }
    }

    return flightsFiltered
  }

  filterFlightsAvailable (flights) {
    let flightsFiltered = this.filterByParams(flights, this.state.flightParams)

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
    let numberFlights = flights.length
    return (
      <div className='o-search'>
        <ToggleFlightMode onToggle={this.onModeToggle} options={this.state.modes} currentOption={this.state.currentMode} />
        <form className='m-search u-pill u-pill--left u-pill--right' method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
          <div className='m-search__row'>
            <SelectLocation type='origin' locations={this.state.options.origin} />
            <SelectLocation type='destination' locations={this.state.options.origin} />
            <SelectDate type='departure_date' dates={[]} />
            <SelectDate type='arrival_date' dates={[]} />
          </div>
          <button className='a-button a-button--primary a-button--circle-lg m-search__button' type='submit' />
        </form>
        <div className='o-results'>
          <div className='o-results__header'>
            <h2>
              {
                numberFlights > 0
                  ? `${numberFlights} flight${numberFlights > 1 ? 's' : ''} found`
                  : 'No flights found'
              }
            </h2>
          </div>
        </div>
        <div className='u-flex'>
          <div className='o-results__filter'>
            <div className='m-sort-block u-pill--top u-pill--bottom'>
              <h3 className='m-sort-block__header'>Sort flights</h3>

              <div className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
                <label className='m-sort-block__item-title'>Cheapest First</label>
                <label className='a-checkbox'>
                  <input type='checkbox' className='a-checkbox__input' />
                  <span className='a-checkbox__marker' />
                </label>
              </div>

              <div className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
                <label className='m-sort-block__item-title'>Fastest First</label>
                <label className='a-checkbox'>
                  <input type='checkbox' className='a-checkbox__input' />
                  <span className='a-checkbox__marker' />
                </label>
              </div>

              <h3 className='m-sort-block__header'>Filter</h3>

              <div className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
                <label className='m-sort-block__item-title'>All</label>
                <label className='a-checkbox'>
                  <input type='checkbox' className='a-checkbox__input' />
                  <span className='a-checkbox__marker' />
                </label>
              </div>

              <div className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
                <label className='m-sort-block__item-title'>Only Direct</label>
                <label className='a-checkbox'>
                  <input type='checkbox' className='a-checkbox__input' />
                  <span className='a-checkbox__marker' />
                </label>
              </div>

              <div className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
                <label className='m-sort-block__item-title'>Joining</label>
                <label className='a-checkbox'>
                  <input type='checkbox' className='a-checkbox__input' />
                  <span className='a-checkbox__marker' />
                </label>
              </div>

            </div>
          </div>
          <div className='o-results__list u-pill--top u-pill--bottom u-pill--wrapper'>
            {
              numberFlights > 0
                ? flights.map((flight, i) => {
                  return (
                    <Flight key={i} flights={[flight]} />
                  )
                })
                : ''
            }
          </div>
        </div>
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
