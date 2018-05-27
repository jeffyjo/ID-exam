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

class SelectLocation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      'type': null,
      'suggestedLocations': []
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onInput = this.onInput.bind(this)
    this.filterByInputValue = this.filterByInputValue.bind(this)
  }

  onInput (e) {
    const input = e.currentTarget
    const value = input.value || ''

    this.filterByInputValue(value)
  }

  filterByInputValue (value) {
    let suggestedLocations = this.props.locations.filter(location => {
      let matchIATA = filterStringMatch(value)(location['IATA'])
      let matchCity = filterStringMatch(value)(location['city'])
      let matchCountry = filterStringMatch(value)(location['country'])

      return matchIATA || matchCity || matchCountry
    })

    this.setState({
      suggestedLocations: suggestedLocations
    })
  }

  selectLocation (location) {
    console.log(location)
  }

  onFocus () {
    this.setState({
      focus: true
    })
  }

  onBlur () {
    this.setState({
      focus: false
    })
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <input
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        ></input>
        {this.state.focus ?
          this.state.suggestedLocations.map((location, i) => {
            return (
              <div key={i} onClick={this.selectLocation.bind(this, location)}>{location.name}</div>
            )
          })
        : ''}
      </div>
    )
  }
}

SelectLocation.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.string
  )
}

SelectLocation.defaultProps = {
  dates: []
}

export default SelectLocation
