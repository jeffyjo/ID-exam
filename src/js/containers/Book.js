'use strict'

import React, { Component } from 'react'

import flights from './../flights'

import {
  urlStringToObject,
  priceSum
} from './../utils'

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flights: [],
      step: 0,
      passengerInfo: null
    }

    this.next = this.next.bind(this)
    this.back = this.back.bind(this)
    this.lockUsers = this.lockUsers.bind(this)

    this.element = React.createRef()
  }

  componentDidMount () {
    let search = window.location.search

    search = urlStringToObject(search)

    search.ids = search.ids.split('-').map(id => {
      return parseInt(id, 10)
    })

    search.passengers = parseInt(search.passengers, 10)

    let matchingFlights = flights.filter(flight => {
      return !!~search.ids.indexOf(flight.id)
    })

    this.setState({
      flights: matchingFlights,
      passengerCount: search.passengers
    })
  }

  next () {
    this.setState({
      step: this.state.step += 1
    })
  }

  back () {
    this.setState({
      step: this.state.step -= 1
    })
  }

  lockUsers () {
    let el = this.element.current
    let forms = el.querySelectorAll('form')
    let passengerInfo = []
    for (let i = 0, l = forms.length; i < l; i++) {
      let passenger = {}
      let form = forms[i]
      let inputs = form.querySelectorAll('input')
      for (let i = 0, l = inputs.length; i < l; i++) {
        let input = inputs[i]
        if (!input.value) return void 0
        if (input.checked) {
          passenger.gender = input.value
        } else {
          passenger[input.getAttribute('name')] = input.value
        }
      }
      passengerInfo.push(passenger)
    }
    this.setState({
      passengerInfo: passengerInfo,
      step: this.state.step += 1
    })
  }

  render () {
    let price = priceSum(this.state.flights)

    return (
      <div className='t-book' ref={this.element}>
        <div className='t-book__heading'>
          <h2>Book you flight</h2>
          <div className="m-progress">
            {
              Array.from({length: 4}).map((n, i) => {
                let classes = 'm-progress__dot'
                classes += ` m-progress__dot--${i + 1}`
                if (i <= this.state.step) {
                  classes += ' m-progress__dot--active'
                }
                return (
                  <span key={i} className={classes}></span>
                )
              })
            }
          </div>
        </div>
        <div className='m-table-item u-pill u-pill--bottom u-pill--top'>
          <div>
            {this.state.flights.map((flight, i) => {
              let duration = flight.duration
              duration = duration.replace(':', '.')
              duration = parseInt(duration, 10).toFixed(1) + 'h'

              return (
                <div key={i} className='m-table-item__inner'>
                  <div className='m-table-item__row m-table-item__row--top'>
                    <div className='m-table-item__header u-grid u-grid--3-cols'>
                      <label className='m-table-item__header-item'><span className='m-table-item__header-item--bg-white'>{flight.origin['IATA']}</span></label>
                      <label className='m-table-item__header-item'>
                        <span className='m-table-item__header-item--bg-grey'>{duration}</span>
                      </label>
                      <label className='m-table-item__header-item'><span className='m-table-item__header-item--bg-white'>{flight.destination['IATA']}</span></label>
                    </div>
                  </div>
                  <div className='m-table-item__row u-grid u-grid--3-cols'>
                    <div className='m-table-item__row-content u-flex u-flex--column'>
                      <label>{flight.origin.city}</label>
                      <label>{flight.departure_time}</label>
                    </div>
                    <div />
                    <div className='m-table-item__row-content u-flex u-flex--column'>
                      <label>{flight.destination.city}</label>
                      <label>{flight.arrival_time}</label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='m-price-block u-pill u-pill--right'>
            <div className='m-price-block__content'>
              <label className='m-price-block__title'>Price</label>
              <h2 className='m-price-block__price'>{'€' + (price * this.state.passengerCount).toFixed(2)}</h2>
            </div>
            {
              this.state.step === 0
              ? <a href='index.html' className='a-button a-button--secondary a-button--square m-price-block__btn u-flex u-flex--center-h'>Change</a>
              : ''
            }
          </div>
        </div>
        {
          this.state.step === 0
          ? Array.from({length: this.state.passengerCount}).map((n, i) => {
              return (
                <form key={i} className="o-form">
                  <div className='m-section-header o-form__header u-pill--top'><h3>Passenger and company information</h3></div>
            			<div className="o-form__content u-pill--bottom">

            				<div className="o-form__row u-flex u-flex--space-between">
            					<div className="m-form-group">
                        <label htmlFor="firstName" className="a-label m-form-group__label">First name</label>
            						<input name='firstName' type="text" placeholder="e.g. John" className="a-input" />
            					</div>
            					<div className="m-form-group m-form-group--border-left">
                        <label htmlFor="middleName" className="a-label m-form-group__label">Middle name</label>
            						<input name='middleName' type="text" placeholder="e.g. Williams" className="a-input" />
            					</div>
            					<div className="m-form-group m-form-group--border-left">
                        <label htmlFor="lastName" className="a-label m-form-group__label">Last name</label>
            						<input name='lastName' type="text" placeholder="e.g. Doe" className="a-input" />
            					</div>
            				</div>

            				<div className="o-form__row u-grid u-grid--2-cols">
            					<div className="m-form-group">
                        <label htmlFor="dateOfBirth" className="a-label m-form-group__label">Date of birth</label>
            						<input name='dateOfBirth' type="text" placeholder="dd.mm.yyyy" className="a-input" />
            					</div>
            					<div className="m-form-group m-form-group--border-left u-grid u-grid--2-cols u-grid--center">
            						<div className="m-radio">
            							<input type="radio" name="radio" value="male" id={`r1_${i}`} className="m-radio__input" />
            							<label htmlFor={`r1_${i}`} className="m-radio__label">MALE</label>
            						</div>
            						<div className="m-radio">
            							<input type="radio" name="radio" value="female" id={`r2_${i}`} className="m-radio__input" />
            							<label htmlFor={`r2_${i}`} className="m-radio__label">FEMALE</label>
            						</div>
            					</div>
            				</div>

            				<div className="o-form__row u-grid u-grid--2-cols">
            					<div className="m-form-group">
                        <label htmlFor="email" className="a-label m-form-group__label">E-mail</label>
            						<input name='email' type="text" placeholder="e.g. john@company.com" className="a-input" />
            					</div>
            					<div className="m-form-group m-form-group--border-left">
                        <label htmlFor="phone" className="a-label m-form-group__label">Phone number</label>
            						<input name='phone' type="text" placeholder="e.g. +4512345678" className="a-input" />
            					</div>
            				</div>

                    <div className="o-form__row u-grid u-grid--2-cols">
            					<div className="m-form-group">
            						<label htmlFor="company" className="a-label m-form-group__label">Company name</label>
            						<input name='company' type="text" placeholder="e.g. Google" className="a-input" />
            					</div>
            					<div className="m-form-group m-form-group--border-left">
            						<label htmlFor="text" className="a-label m-form-group__label">TAX number</label>
            						<input name='tax' type="text" placeholder="e.g. 1234TA567" className="a-input" />
            					</div>
            				</div>

            			</div>
            		</form>
              )
            })
            : ''
        }

        {
          this.state.step === 1
          ? this.state.passengerInfo.map((passenger, i) => {
              return (
                <form key={i} className="o-form">
                  <div className='m-section-header o-form__header u-pill--top'><h3>Confirm information</h3></div>
                  <div className="o-form__content u-pill--bottom">

                    <div className="o-form__row u-flex u-flex--space-between">
                      <div className="m-form-group">
                        <label htmlFor="" className="a-label m-form-group__label">First name</label>
                        <input value={passenger.firstName} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                      <div className="m-form-group m-form-group--border-left">
                        <label htmlFor="" className="a-label m-form-group__label">Middle name</label>
                        <input value={passenger.middleName} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                      <div className="m-form-group m-form-group--border-left">
                        <label htmlFor="" className="a-label m-form-group__label">Last name</label>
                        <input value={passenger.lastName} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                    </div>

                    <div className="o-form__row u-grid u-grid--2-cols">
                      <div className="m-form-group">
                        <label htmlFor="" className="a-label m-form-group__label">Date of birth</label>
                        <input value={passenger.dateOfBirth} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                      <div className="m-form-group m-form-group--border-left">
                        <label htmlFor="" className="a-label m-form-group__label">Gender</label>
                        <input value={passenger.gender} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                    </div>

                    <div className="o-form__row u-grid u-grid--2-cols">
                      <div className="m-form-group">
                        <label htmlFor="" className="a-label m-form-group__label">Email</label>
                        <input value={passenger.email} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                      <div className="m-form-group m-form-group--border-left">
                        <label htmlFor="" className="a-label m-form-group__label">Phone</label>
                        <input value={passenger.phone} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                    </div>

                    <div className="o-form__row u-grid u-grid--2-cols">
                      <div className="m-form-group">
                        <label htmlFor="" className="a-label m-form-group__label">Company</label>
                        <input value={passenger.company} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                      <div className="m-form-group m-form-group--border-left">
                        <label htmlFor="" className="a-label m-form-group__label">Tax</label>
                        <input value={passenger.tax} type="text" placeholder="placeholder" className="a-input" />
                      </div>
                    </div>

                  </div>
                </form>
              )
            })
            : ''
        }

        {
          this.state.step === 2
          ? <form className="o-form">
              <div className='m-section-header o-form__header u-pill--top'><h3>Payment information</h3></div>
              <div className="o-form__content u-pill--bottom">

                <div className="o-form__row u-grid u-grid--2-cols">
                  <div className="m-form-group">
                    <label htmlFor="" className="a-label m-form-group__label">Card number</label>
                    <input type="text" placeholder="1234 5678 1234 5678" className="a-input" />
                  </div>
                  <div className="m-form-group m-form-group--border-left">
                    <label htmlFor="" className="a-label m-form-group__label">Cardholder name</label>
                    <input type="text" placeholder="John Doe" className="a-input" />
                  </div>
                </div>

                <div className="o-form__row u-grid u-grid--2-cols">
                  <div className="m-form-group">
                    <label htmlFor="" className="a-label m-form-group__label">Expiry date</label>
                    <input type="text" placeholder="placeholder" className="a-input" />
                  </div>
                  <div className="m-form-group m-form-group--border-left">
                    <label htmlFor="" className="a-label m-form-group__label">CVV</label>
                    <input type="text" placeholder="placeholder" className="a-input" />
                  </div>
                </div>

              </div>
            </form>
            : ''
        }
        <div className='t-book__footer'>
          {
            this.state.step === 0
            ? <div>
                <button className='a-button a-button--primary a-button--pill' onClick={this.lockUsers}>Next</button>
              </div>
            : ''
          }
          {
            this.state.step === 1
            ? <div>
                <button className='a-button a-button--pill' onClick={this.back}>Edit</button>
                <button className='a-button a-button--primary a-button--pill' onClick={this.next}>Confirm</button>
              </div>
            : ''
          }
          {
            this.state.step === 2
            ? <div>
                <button className='a-button a-button--pill' onClick={this.back}>Edit</button>
                <a href='flight-booked.html'><button className='a-button a-button--primary a-button--pill'>Confirm</button></a>
              </div>
            : ''
          }
        </div>
      </div>
    )
  }
}

export default Book
