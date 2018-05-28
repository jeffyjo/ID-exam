'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class SelectPassengerCount extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {

  }

  onChange (e) {
    let value = e.currentTarget.value
    this.props.changeFunc(parseInt(value, 10))
  }

  render () {
    return (
      <div className={`m-search__item m-search__item--${this.props.type}`} ref={this.element}>
        <div className='a-select'>
          <select className='a-select__selector a-select__selector--passenger' name='passengerCount' onChange={this.onChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
      </div>
    )
  }
}

SelectPassengerCount.propTypes = {
  type: PropTypes.string
}

SelectPassengerCount.defaultProps = {
  type: ''
}

export default SelectPassengerCount
