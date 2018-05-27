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
    console.log(date)
    this.setState({
      value: date,
      submitValue: date.format('DD/MM/YY')
    })
  }

  componentDidMount () {

  }

  render () {
    return (
      <div ref={this.element}>
        <input id={`input_${this.props.type}`} type='hidden' value={this.state.submitValue}></input>
        <DatePicker
          className='a-input a-input--date'
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
  dates: PropTypes.arrayOf(
    PropTypes.string
  )
}

SelectDate.defaultProps = {
  dates: []
}

export default SelectDate
