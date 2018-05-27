'user strict'

import React, { Component } from 'react'

class ToggleFlightMode extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <nav className='m-nav m-nav--space'>
        <ul className="m-nav__inner">
          {this.props.options.map((option, i) => {
            return (
              <li
                key={i}
                className={`m-nav__item ${this.props.currentOption === option ? 'm-nav__item' : ''}`}
                onClick={() => this.props.onToggle(option)}
              >
                <a className={`a-link a-link--content ${this.props.currentOption === option ? 'a-link--active' : ''}`}>{option}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default ToggleFlightMode
