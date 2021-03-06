'use strict'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class SortFlights extends Component {
  render () {
    return (
      <div className='m-sort-block__single'>
        <label className='m-sort-block__header'>{this.props.heading}</label>
        {this.props.options.map((option, i) => {
          return (
            <div key={i} className='m-sort-block__item u-flex u-flex--space-between u-flex--center-v'>
              <label className='m-sort-block__item-title'>{option.text}</label>
              <label className='a-checkbox'>
                {
                  option.id === 1
                    ? <input name={this.props.type} type='radio' className='a-checkbox__input' value={option.id} onChange={this.props.onSelect} defaultChecked/>
                    : <input name={this.props.type} type='radio' className='a-checkbox__input' value={option.id} onChange={this.props.onSelect} />
                }
                <span className='a-checkbox__marker' />
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}

SortFlights.propTypes = {
  type: PropTypes.string,
  heading: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ),
  selected: PropTypes.number,
  onSelect: PropTypes.function
}

SortFlights.defaultProps = {
  type: '',
  heading: '',
  options: [],
  selected: 1
}

export default SortFlights
