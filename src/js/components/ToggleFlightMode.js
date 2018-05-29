'user strict'

import React, { Component } from 'react'

class ToggleFlightMode extends Component {
  render () {
    return (
      <nav className='o-search-nav'>
        <ul className='m-nav'>
          {this.props.options.map((option, i) => {
            return (
              <li
                key={i}
                className={`m-nav__item ${this.props.currentOption === option ? 'm-nav__item' : ''}`}
                onClick={() => this.props.onToggle(option)}
              >
                <a className={`a-link a-link--content ${this.props.currentOption === option ? 'a-link--content--active' : ''}`}>{option}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default ToggleFlightMode
