'use strict'

import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import PropTypes from 'prop-types'

import {
  filterUnique,
  filterStringMatch
} from './../utils'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      options: {
        departureDate: moment(),
        returnDate: moment().add(10, 'days')
      },
      filterParams: {
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
    this.searchForOption = this.searchForOption.bind(this)
    this.onDatePick = this.onDatePick.bind(this)
  }

  componentDidMount () {
    const options = this.props.flights.reduce((a, c) => {
      a.airlineCompany.push(c['airline_company'])
      a.origin.push(c['origin'])
      a.destination.push(c['destination'])

      return a
    }, {
      airlineCompany: [],
      origin: [],
      destination: []
    })

    this.state.options = options
  }

  searchForOption (option, value) {
    let filteredValue = this.state.options[option]
      .filter(filterStringMatch(value))
      .filter(filterUnique)

    return {
      option: option,
      value: filteredValue
    }
  }

  onInput (e) {
    let input = e.currentTarget
    let option = input.name
    let value = input.value

    let matches = this.searchForOption(option, value)

    console.log(matches)
  }

  onDatePick (flightType, date) {
    // if ('')
    // this.setState({
    //
    // })
  }

  render () {
    return (
      <div id='search'>
        <form className='search-form'>
          <div className='search-form__column'>
            <input name='origin' onInput={this.onInput} placeholder='Origin' />
            <div className='search-form__suggestions'>

            </div>
          </div>
          <div className='search-form__column'>
            <input name='destination' onInput={this.onInput} placeholder='Destination' />
            <div className='search-form__suggestions'>

            </div>
          </div>
          <div className='search-form__column'>
            <DatePicker
              className='date date--departure'
              selected={this.state.options.departureDate}
              onChange={(date) => this.onDatePick('departure', date)}
              locale='en-gb'
              dateFormat='L'
            />
          </div>
          <div className='search-form__column'>
            <DatePicker
              className='date date--return'
              selected={this.state.options.returnDate}
              onChange={(date) => this.onDatePick('return', date)}
              locale='en-gb'
              dateFormat='L'
            />
          </div>
        </form>
        {
          this.props.flights.map((f, i) => <p key={i}>{f.name}</p>)
        }
      </div>
    )
  }
}

Search.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      airline_company: PropTypes.string,
      plane_id: PropTypes.string,
      origin: PropTypes.string,
      destination: PropTypes.string,
      departure_date: PropTypes.string,
      departure_time: PropTypes.string,
      duration: PropTypes.string,
      arrival_date: PropTypes.string,
      arrival_time: PropTypes.string,
      price: PropTypes.string
    })
  )
}

Search.defaultProps = {
  flights: []
}

export default Search
