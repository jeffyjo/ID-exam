'use strict'

import React, { Component } from 'react'
import { siteRouting } from '../utils'

class FlightBooked extends Component {
  constructor(props){
    super(props)

    this.state = {
      full: true
    }

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin(){
    document.querySelector('#btnLogin').click()
  }

  render () {
    return (
      <div>
        <div className="u-flex u-flex--center-h u-margin--lg-v">
        { this.state.full === true
          ? <div className="m-progress m-progress--sm">
              <span className="m-progress__dot m-progress__dot--active"></span>
              <span className="m-progress__dot m-progress__dot--2 m-progress__dot--active"></span>
              <span className="m-progress__dot m-progress__dot--3 m-progress__dot--active"></span>
              <span className="m-progress__dot m-progress__dot--4 m-progress__dot--active"></span>
            </div>
          : <div className="m-progress m-progress--sm">
              <span className="m-progress__dot m-progress__dot--active"></span>
              <span className="m-progress__dot m-progress__dot--4 m-progress__dot--active"></span>
            </div>
        }
        </div>
        <div className="o-cta-block o-cta-block--middle-align u-grid">
          <div className="m-site-header o-cta-block__item">
            <h2 className="m-site-header__header m-site-header__header--margin-sm m-site-header__header--lg">Thank you!</h2>
            <p className="m-site-header__lead">Your flights has been booked. We have sent the ticket additionally to your e-mail.</p>
          </div>
          <a href="https://drive.google.com/file/d/1yLEozmaBflLI7VJOUfMGChj73BnBapyA/view?usp=sharing" className="a-button a-button--primary a-button--pill a-button--lg o-cta-block__item u-grid__item u-grid__item--center-h">Download ticket</a>
        </div>
        { this.state.full === true 
          ? <div className="o-cta-block  o-cta-block--space-top o-cta-block--middle-align u-grid">
            <div className="m-site-header o-cta-block__item">
              <p className="m-site-header__lead">To save the information for easier future bookings please use your account or create one.</p>
            </div>
            <div className="o-cta-block__item o-cta-block__item--actions">
              <button onClick={ () => {siteRouting('create.html')} } className="a-button a-button--secondary a-button--secondary-text a-button--pill u-grid__item u-grid__item--center-h">Register</button>
              <button onClick={this.onLogin} className="a-button a-button--secondary a-button--secondary-text a-button--pill u-grid__item u-grid__item--center-h">Login</button>
            </div>
          </div>
          : ''
        }
      </div>
    )
  }
}

export default FlightBooked
