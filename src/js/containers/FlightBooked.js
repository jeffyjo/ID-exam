'use strict'

import React, { Component } from 'react'

class FlightBooked extends Component {
  render () {
    return (
      <div>
        <div className="u-flex u-flex--center-h u-margin--lg-v">
          <div className="m-progress m-progress--sm">
            <span className="m-progress__dot m-progress__dot--active"></span>
            <span className="m-progress__dot m-progress__dot--4 m-progress__dot--active"></span>
          </div>
        </div>
        <div className="o-rte-block o-rte-block--middle-align">
          <div className="m-site-header o-rte-block__item">
            <h2 className="m-site-header__header o-rte-block__item--xl">Thank you</h2>
          </div>
          <p className="o-rte-block__item o-rte-block__item--text o-rte-block__item--lg o-rte-block__item--space">Your flights has been booked. We have sent the ticket additionally to your e-mail.</p>
          <button className="a-button a-button--pill a-button--primary">Download ticket</button>
        </div>
      </div>
    )
  }
}

export default FlightBooked
