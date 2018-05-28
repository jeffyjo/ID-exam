'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {
  filterStringMatch
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
      <div className={`m-search__item m-search__item--${this.props.type}`} ref={this.element}>
        <input id={`input_${this.props.type}_${this.props.flightCount}`} type='hidden' value={this.state.submitValue} />
        <input
          className='a-input a-input--with-icon'
          onInput={this.onInput}
          onFocus={this.onFocus}
          value={this.state.value || ''}
          placeholder={this.props.type}
        />
        {this.state.focus && this.state.suggestedLocations.length > 0
          ? <div className='m-search__suggestions-outer'>
            <div className='m-search__suggestions'>
              <div className='m-search__suggestions-wrapper'>
                {this.state.suggestedLocations.map((location, i) => {
                  return (
                    <div className='m-search__suggestion' key={i} data-submit-value={location['IATA']} data-value={`${location['city']} (${location['IATA']})`} onClick={this.selectLocation}>
                      <div>
                        <p>{location['city']}</p>
                        <span>{location['country']}</span>
                      </div>
                      <div><p>{location['IATA']}</p></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          : ''}
      </div>
    )
  }
}

SelectLocation.propTypes = {
  type: PropTypes.string,
  flightCount: PropTypes.number,
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
  type: '',
  flightCount: 0,
  locations: []
}

export default SelectLocation
