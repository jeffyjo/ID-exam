'use strict'

import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props){
    super(props)

    let site = localStorage.getItem('site') ? localStorage.getItem('site') : 'index.html'

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      isLoggingIn: false,
      user: this.props.user,
      loginParams : {
        username: null,
        password: null
      },
      currentSite: site
    }

    this.toggleLoggingIn = this.toggleLoggingIn.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
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
        isLoggedIn: true,
        loginParams: loginParams
      })

      this.toggleLoggingIn()
    }
  }

  onLogout(){
    window.localStorage.setItem('isLoggedIn', false)

    this.setState({
      isLoggedIn: false
    })
  }

  toggleLoggingIn() {
    const showLoggedIn = this.state.isLoggingIn
    this.setState({isLoggingIn: !showLoggedIn})

    let overlay = document.getElementById('overlay')
    overlay.classList.toggle('u-overlay--active')

  }

  toggleNav(site){
    localStorage.setItem('site', site)
  }

  render () {
    return (
      <div>
      <div id="overlay" className="u-overlay"></div>
      <nav className="u-grid u-grid--2-cols">
        <div className="m-logo u-grid__item--left u-grid__item--center-v">
          <a onClick={() => {this.toggleNav('index.html')}} href="index.html">
            <span className="a-icon a-icon--lg a-icon--logo"></span>
          </a>
        </div>
        <ul className="m-nav u-grid__item--right">
          <li className="m-nav__item">
            <a href="index.html" onClick={() => {this.toggleNav('index.html')}} className={`a-link a-link--nav ${this.state.currentSite === 'index.html' ? 'a-link--active' : '' }`}>Search Flight</a>
          </li>
          { this.state.isLoggedIn === true ? 
            <li className="m-nav__item">
              <a href="my-account.html" onClick={() => {this.toggleNav('my-account.html')}} className={`a-link a-link--nav ${this.state.currentSite === 'my-account.html' ? 'a-link--active' : '' }`}>My account</a>
            </li>
          : <li className="m-nav__item">
              <a href="create.html" onClick={() => {this.toggleNav('create.html')}} className={`a-link a-link--nav ${this.state.currentSite === 'create.html' ? 'a-link--active' : '' }`}>Create account</a>
            </li> }
          <li className="m-nav__item">
            { this.state.isLoggedIn === true 
              ? <button onClick={this.onLogout} className="a-button a-button--secondary a-button--circle-md">
                  <span className="a-icon a-icon--logout"></span>
                </button>
              : <button onClick={this.toggleLoggingIn} className={this.state.isLoggingIn === true ? "o-main-nav__login-btn a-button a-button--secondary a-button--secondary-text a-button--pill a-button--active" : "o-main-nav__login-btn a-button a-button--primary a-button--pill"}>{this.state.isLoggingIn === true ? 'Back' : 'Login' }</button>
            }
          </li>
          { this.state.isLoggingIn ? <form className="o-form o-form--absolute o-form--top-arrow o-form--sm o-main-nav__login u-grid" method="POST" ref={this.form} onSubmit={this.onFormSubmit}>
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
      </div>
    )
  }
}

export default Navbar
