'use strict'

import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import PropTypes from 'prop-types'

class SelectDate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      'value': '',
      'submitValue': ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange (date) {
    this.setState({
      value: date,
      submitValue: date.format('DD/MM/YY')
    })
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className={`m-search__item m-search__item--${this.props.type}`} ref={this.element}>
        <input id={`input_${this.props.type}_${this.props.flightCount}`} type='hidden' value={this.state.submitValue} />
        <DatePicker
          className='a-input a-input--with-icon'
          selected={this.state.value || moment().add(6, 'days')}
          onChange={this.onChange}
          locale='en-gb'
          dateFormat='D. MMMM'
        />
      </div>
    )
  }
}

SelectDate.propTypes = {
  type: PropTypes.string,
  flightCount: PropTypes.number,
  dates: PropTypes.arrayOf(
    PropTypes.string
  )
}

SelectDate.defaultProps = {
  type: '',
  flightCount: 0,
  dates: []
}

export default SelectDate
