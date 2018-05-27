'use strict'

import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoggingIn: false,
      user: this.props.user
    }

    this.toggleLoggingIn = this.toggleLoggingIn.bind(this)
  }

  toggleLoggingIn() {
    const showLoggedIn = this.state.isLoggingIn
    this.setState({isLoggingIn: !showLoggedIn})
  }

  render () {
    return (
      <nav className="o-main-nav u-grid u-grid--2-cols">
        <div className="m-logo u-grid__item--left u-grid__item--center-v">
          <h1 className="m-logo__header m-logo__header--transparent">Business</h1>
          <h1 className="m-logo__header m-logo__header--bold">Flights Forever</h1>
        </div>
        <ul className="m-nav u-grid__item--right">
          <li className="m-nav__item">
            <a href="#" className="a-link a-link--nav a-link--active">Search Flight</a>
          </li>
          { this.state.user !== null ? 
            <li className="m-nav__item">
              <a href="#" className="a-link a-link--nav a-link">My account</a>
            </li>
          : <li className="m-nav__item">
              <a href="#" className="a-link a-link--nav a-link">Create account</a>
            </li> }
          <li className="m-nav__item">
            { this.state.user !== null ?
              <button className="a-button a-button--secondary a-button--circle-md"></button>
            : <button onClick={this.toggleLoggingIn} className="a-button a-button--primary a-button--pill">Login</button>
            }
          </li>
          { this.state.isLoggingIn ? <form className="o-form o-form--relative o-form--top-arrow o-form--sm u-pill--top u-pill--bottom u-grid">
            <div className="m-form-group o-form__row u-pill--top">
              <label for="" className="a-label m-form-group__label">label</label>
              <input type="text" placeholder="placeholder" className="a-input" />
            </div>
            <div className="m-form-group o-form__row">
              <input type="text" placeholder="placeholder" className="a-input" />
            </div>
				    <button className="a-button a-button--primary a-button--pill o-form__btn--overflow">Yellow</button>
			    </form> : null }
        </ul>
		  </nav>
    )
  }
}

export default Navbar
