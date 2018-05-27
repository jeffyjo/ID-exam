'use strict'

import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import PropTypes from 'prop-types'

import {
  filterUnique,
  filterStringMatch,
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
      selected: {
        origin: null,
        destination: null
      },
      types: [
        'oneWay',
        'twoWay',
        'multi'
      ]
    }

    this.onInput = this.onInput.bind(this)
    this.onDatePick = this.onDatePick.bind(this)
    this.filterFlightsAvailable = this.filterFlightsAvailable.bind(this)
    this.filterByParam = this.filterByParam.bind(this)
    this.onLocationPick = this.onLocationPick.bind(this)
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

  filterFlightsAvailable(flights) {
    let params = this.state.flightParams

    let flightsFiltered = flights

    for (let key of Object.keys(params)) {
      if (params[key]) {
        flightsFiltered = flightsFiltered.filter(this.filterByParam(key))
      }
    }

    return flightsFiltered
  }

  filterByParam (param) {
    if (param === 'departure_date' || param === 'arrival_date') {
      return (flight) => {
        return flight[param] === this.state.flightParams[param].format('DD/MM/YY')
      }
    } else if (param === 'origin' || param === 'destination') {
      return (flight) => {
        return flight[param]['IATA'] === this.state.flightParams[param]['IATA']
      }
    } else {
      return (flight) => flight
    }
  }

  onInput (e) {
    let input = e.currentTarget
    let key = input.name
    let value = input.value || ''

    let filteredOption = this.state.options[key].filter(option => {
      let matchIATA = filterStringMatch(value)(option['IATA'])
      let matchCity = filterStringMatch(value)(option['city'])
      let matchCountry = filterStringMatch(value)(option['country'])

      return matchIATA || matchCity || matchCountry
    })

    this.setState({
      optionsFiltered: Object.assign({}, this.state.optionsFiltered, {
        [key]: filteredOption
      })
    })
  }

  onLocationPick (e) {
    console.log(e)
    let selected = e.currentTarget
    let selectedVal = selected.getAttribute('data-select-val')
    let selectedType = selected.getAttribute('data-select-type')
    console.log(selected, selectedVal, selectedType)
    this.setState({
      selected: Object.assign({}, this.state.selected, {
        [selectedType]: selectedVal
      })
    })
  }

  onDatePick (flightType, date) {
    this.setState({
      flightParams: Object.assign({}, this.state.flightParams, {
        [flightType]: date
      })
    })
  }

  render () {
    let flights = this.filterFlightsAvailable(this.props.flights)
    return (
      <div id='search'>
        <form className='o-search-form u-grid u-grid--4-cols'>
          <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'><div>
            <input className='a-input' name='origin' onInput={this.onInput} autoComplete='off' placeholder='Origin'  value={this.state.selected.origin || ''} />
            <div className='o-search-form__suggestions'>
              <div className='o-search-form__suggestions-wrapper'>
                {
                  this.state.optionsFiltered.origin.map((option, index) => {
                    return (
                      <div key={index} className='o-search-form__suggestion' data-select-type={'origin'} data-select-val={`${option['city']} (${option['IATA']})`} onClick={this.onLocationPick}>
                        <p>{`${option['city']} (${option['IATA']})`}</p>
                        <span>{option['country']}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div></div>
          <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'><div>
            <input className='a-input' name='destination' onInput={this.onInput} autoComplete='off' placeholder='Destination' value={this.state.selected.destination || ''} />
            <div className='o-search-form__suggestions'>
              <div className='o-search-form__suggestions-wrapper'>
              {
                this.state.optionsFiltered.destination.map((option, index) => {
                  return (
                    <div key={index} className='o-search-form__suggestion' data-select-type={'destination'} data-select-val={`${option['city']} (${option['IATA']})`} onClick={this.onLocationPick}>
                      <p>{`${option['city']} (${option['IATA']})`}</p>
                      <span>{option['country']}</span>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div></div>
          <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'><div>
            <DatePicker
              className='a-input a-input--date'
              selected={this.state.flightParams.departure_date || moment()}
              onChange={(date) => this.onDatePick('departure_date', date)}
              locale='en-gb'
              dateFormat='D. MMMM'
            />
          </div></div>
          <div className='o-search-form__column u-flex u-flex--column u-flex--center-h'><div>
            <DatePicker
              className='a-input a-input--date'
              selected={this.state.flightParams.arrival_date || moment().add(6, 'days')}
              onChange={(date) => this.onDatePick('arrival_date', date)}
              locale='en-gb'
              dateFormat='D. MMMM'
            />
          </div></div>
          {/* <div className='o-search-form__column'>
            <button className='a-button'></button>
          </div> */}
        </form>
        {
          flights.map((f, i) => {
            return (
              <p key={i}>{f.plane_id}</p>
            )
          })
        }
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
