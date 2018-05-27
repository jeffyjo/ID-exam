'user strict'

import React, { Component } from 'react'

class ToggleFlightMode extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='o-toggle'>
        {this.props.options.map((option, i) => {
          return (
            <div
              key={i}
              className={`o-toggle__option ${this.props.currentOption === option ? 'o-toggle__option--active' : ''}`}
              onClick={() => this.props.onToggle(option)}>
              {option}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ToggleFlightMode
