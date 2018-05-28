'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import SelectLocation from './../components/SelectLocation'
import SelectDate from './../components/SelectDate'
import ToggleFlightMode from './../components/ToggleFlightMode'
import Flight from './../components/Flight'
import SortFlights from './../components/SortFlights'

import moment from 'moment'

import {
  removeDuplicateObjectsByKey,
  allPossibleCases
} from './../utils'

class FindFlight extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaults: {
        origin: null,
        destination: null,
        departure_date: moment(),
        return_date: moment().add(1, 'days'),
        passengerCount: null
      },
      options: {
        origin: [],
        destination: [],
        departure_date: [],
        return_date: [],
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
        return_date: null,
        passengerCount: null
      },
      flightParamsArr: [],
      modes: [
        'Return',
        'One-way',
        'Multi'
      ],
      currentMode: 'One-way',
      numberRows: 1,
      sorts: [
        {
          id: 1,
          text: 'Cheapest First'
        },
        {
          id: 2,
          text: 'Fastest First'
        }
      ],
      currentSort: 1,
      filters: [
        {
          id: 1,
          text: 'All'
        },
        {
          id: 2,
          text: 'Only Direct'
        },
        {
          id: 3,
          text: 'Joining'
        }
      ],
      currentFilter: 1,
      initial: true
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.filterFlightsAvailable = this.filterFlightsAvailable.bind(this)
    this.setFlightParams = this.setFlightParams.bind(this)
    this.filterByParam = this.filterByParam.bind(this)
    this.filterByParams = this.filterByParams.bind(this)
    this.onModeToggle = this.onModeToggle.bind(this)
    this.onSort = this.onSort.bind(this)

    this.form = React.createRef()
  }

  onFormSubmit (e) {
    e.preventDefault()

    this.setFlightParams()
  }

  setFlightParams () {
    let form = this.form.current

    if (!form) return void 0

    let flightParams = []

    for (let i = 0, l = this.state.numberRows; i < l; i++) {
      flightParams[i] = Object.keys(this.state.flightParams).reduce((flightParams, param) => {
        let input = form.querySelector(`#input_${param}_${i}`)

        if (input) {
          let value = input.value
          flightParams[param] = value
        }

        return flightParams
      }, {})
    }

    if (flightParams[0].return_date) {
      flightParams.push({
        origin: flightParams[0].destination,
        destination: flightParams[0].origin,
        departure_date: flightParams[0].return_date
      })

      delete flightParams[0].return_date
    }

    this.setState({
      flightParamsArr: flightParams,
      initial: false
    })
  }

  onModeToggle (mode) {
    let numberRows = mode === 'Multi' ? 2 : 1
    this.setState({
      currentMode: mode,
      numberRows: numberRows
    })
  }

  filterByParam (param, val) {
    if (param === 'departure_date' || param === 'return_date') {
      return (flight) => {
        return flight[param] === val
      }
    } else if (param === 'origin' || param === 'destination') {
      return (flight) => {
        return flight[param]['IATA'] === val
      }
    } else {
      return (flight) => flight
    }
  }

  filterByParams (flights, params) {
    let flightsFiltered = flights

    for (let key of Object.keys(params)) {
      if (params[key]) {
        flightsFiltered = flightsFiltered.filter(this.filterByParam(key, params[key]))
      }
    }

    return flightsFiltered
  }

  filterFlightsAvailable (flights) {
    let flightsFiltered = []

    for (let params of this.state.flightParamsArr) {
      flightsFiltered.push(this.filterByParams(flights, params))
    }

    flightsFiltered = allPossibleCases(flightsFiltered)

    return flightsFiltered
  }

  onSort (type, e) {
    let checkbox = e.currentTarget
    let value = checkbox.value

    if (type === 'sort') {
      this.setState({
        currentSort: parseInt(value, 10)
      })
    }

    if (type === 'filter') {
      this.setState({
        currentFilter: parseInt(value, 10)
      })
    }
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

    if (flights[0] && !Array.isArray(flights[0])) {
      flights = flights.map(flight => [flight])
    }

    let numberFlights = flights.length

    return (
      <div className='o-search'>
        <ToggleFlightMode onToggle={this.onModeToggle} options={this.state.modes} currentOption={this.state.currentMode} />

        {
          this.state.currentMode === 'Return'
          ? <form className='m-search u-pill u-pill--left u-pill--right' method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
              <div className='m-search__row'>
                <SelectLocation type='origin' locations={this.state.options.origin} flightCount={0} />
                <SelectLocation type='destination' locations={this.state.options.origin} flightCount={0} />
                <SelectDate type='departure_date' dates={[]} flightCount={0} />
                <SelectDate type='return_date' dates={[]} flightCount={0} />
              </div>
              <button className='a-button a-button--primary a-button--circle-lg m-search__button' type='submit' />
            </form>
          : ''
        }

        {
          this.state.currentMode === 'One-way'
          ? <form className='m-search u-pill u-pill--left u-pill--right' method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
              <div className='m-search__row'>
                <SelectLocation type='origin' locations={this.state.options.origin} flightCount={0} />
                <SelectLocation type='destination' locations={this.state.options.origin} flightCount={0} />
                <SelectDate type='departure_date' dates={[]} flightCount={0} />
              </div>
              <button className='a-button a-button--primary a-button--circle-lg m-search__button' type='submit' />
            </form>
          : ''
        }

        {
          this.state.currentMode === 'Multi'
          ? <form className='m-search u-pill u-pill--left u-pill--right' method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
            {
              Array.from({length: this.state.numberRows}).map((n, i) => {
                return(
                  <div key={i} className='m-search__row'>
                    <SelectLocation type='origin' locations={this.state.options.origin} flightCount={i} />
                    <SelectLocation type='destination' locations={this.state.options.origin} flightCount={i} />
                    <SelectDate type='departure_date' dates={[]} flightCount={i} />
                  </div>
                )
              })
            }
              <button className='a-button a-button--primary a-button--circle-lg m-search__button' type='submit' />
            </form>
          : ''
        }
        {
          !this.state.initial
          ? <div>
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
                    <SortFlights
                      type={'sort'}
                      heading={'Sort flights'}
                      selected={this.state.currentSort}
                      options={this.state.filters}
                      onSelect={(e) => { this.onSort('sort', e) }}
                    />
                    <SortFlights
                      type={'filter'}
                      heading={'Filter'}
                      selected={this.state.currentFilter}
                      options={this.state.sorts}
                      onSelect={(e) => { this.onSort('filter', e) }}
                    />
                  </div>
                </div>
                <div className='o-results__list u-pill--top u-pill--bottom u-pill--wrapper'>
                  {
                    numberFlights > 0
                    ? flights.map((flight, i) => {
                      return (
                        <Flight key={i} flights={flight} />
                      )
                    })
                    : ''
                  }
                </div>
              </div>
            </div>
          : ''
        }
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
        country: PropTypes.string,
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
