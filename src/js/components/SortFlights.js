'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class SortFlights extends Component {
  render () {
    return (
      <div>
        sorting goes here
      </div>
    )
  }
}

SortFlights.propTypes = {
  heading: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string
  ),
  selected: PropTypes.string,
  onSelect: PropTypes.function
}

SortFlights.defaultProps = {
  heading: '',
  options: [],
  selected: '',
  onSelect: () => {}
}

export default SortFlights
