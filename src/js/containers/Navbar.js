'use strict'

import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      isLoggingIn: false,
      user: this.props.user,
      loginParams : {
        username: null,
        password: null
      }
    }

    this.toggleLoggingIn = this.toggleLoggingIn.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.form = React.createRef()
  }

  onFormSubmit(e){
    e.preventDefault()

    this.onLogin()
  }

  onLogin(){
    let form = this.form.current
    
    let loginParams = Object.keys(this.state.loginParams).reduce((loginParams, param) => {
      let input = form.querySelector(`#input_${param}`)

      if(input){
        let value = input.value
        loginParams[param] = value
      }

      return loginParams
    }, {})
        
    let user = this.state.user
    
    if( loginParams.username === user.mail && loginParams.password === user.password ){

      window.localStorage.setItem('isLoggedIn', true)

      this.setState({
        isLoggedIn: window.localStorage.getItem('isLoggedIn'),
        loginParams: loginParams
      })
    }
  }

  onLogout(){
    window.localStorage.setItem('isLoggedIn', false)

    this.setState({
      isLoggedIn: window.localStorage.getItem('isLoggedIn')
    })
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
          { this.state.isLoggedIn === true ? 
            <li className="m-nav__item">
              <a href="#" className="a-link a-link--nav a-link">My account</a>
            </li>
          : <li className="m-nav__item">
              <a href="#" className="a-link a-link--nav a-link">Create account</a>
            </li> }
          <li className="m-nav__item">
            { this.state.isLoggedIn === true ?
              <button onClick={this.onLogout} className="a-button a-button--secondary a-button--circle-md"></button>
            : <button onClick={this.toggleLoggingIn} className="a-button a-button--primary a-button--pill">Login</button>
            }
          </li>
          { this.state.isLoggingIn ? <form className="o-form o-form--relative o-form--top-arrow o-form--sm u-grid" method="POST" ref={this.form} onSubmit={this.onFormSubmit}>
            <div className="o-form__content u-pill--top u-pill--bottom">
              <div className="m-form-group o-form__row u-pill--top">
                <label htmlFor="input_username" className="a-label m-form-group__label">E-mail</label>
                <input type="text" name="username" id="input_username" placeholder="Your E-mail" className="a-input" />
              </div>
              <div className="m-form-group o-form__row">
                <input type="password" placeholder="Password" name="password" id="input_password" className="a-input" />
              </div>
            </div>
				    <button type="submit" className="a-button a-button--primary a-button--pill o-form__btn--overflow">Login</button>
			    </form> : null }
        </ul>
		  </nav>
    )
  }
}

export default Navbar
