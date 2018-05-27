'use strict'

import React, { Component } from 'react'

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
      'value': '',
      'submitValue': '',
      'suggestedLocations': [],
      'focus': false
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onInput = this.onInput.bind(this)
    this.filterByInputValue = this.filterByInputValue.bind(this)
    this.selectLocation = this.selectLocation.bind(this)

    this.element = React.createRef()
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
      value: value,
      submitValue: '',
      suggestedLocations: suggestedLocations
    })
  }

  selectLocation (e) {
    e.preventDefault()

    let clicked = e.currentTarget
    let location = clicked.getAttribute('data-value')
    let submitValue = clicked.getAttribute('data-submit-value')

    this.setState({
      value: location,
      submitValue: submitValue,
      focus: false
    })
  }

  onFocus () {
    document.addEventListener('click', this.onBlur)
    this.setState({
      focus: true
    })
  }

  onBlur (e) {
    let triggerElement = e.target
    let currentElement = this.element.current

    if (!currentElement.contains(triggerElement)) {
      document.removeEventListener('click', this.onBlur)

      this.setState({
        focus: false
      })
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div ref={this.element}>
        <input id={`input_${this.props.type}`} type='hidden' value={this.state.submitValue}></input>
        <input
          className='a-input'
          onInput={this.onInput}
          onFocus={this.onFocus}
          value={this.state.value || ''}
          placeholder={this.props.type}
        />
        {this.state.focus ?
          <div className='o-search-form__suggestions'>
            <div className='o-search-form__suggestions-wrapper'>
              {this.state.suggestedLocations.map((location, i) => {
                return (
                  <div key={i} data-submit-value={location['IATA']} data-value={`${location['city']} (${location['IATA']})`} onClick={this.selectLocation}>
                    <p>{`${location['city']} (${location['IATA']})`}</p>
                    <span>{location['country']}</span>
                  </div>
                )
              })}
            </div>
          </div>
        : ''}
      </div>
    )
  }
}

SelectLocation.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      location: PropTypes.string,
      country: PropTypes.string,
      country_code: PropTypes.string,
      IATA: PropTypes.string,
      ICAO: PropTypes.string
    })
  )
}

SelectLocation.defaultProps = {
  locations: []
}

export default SelectLocation
