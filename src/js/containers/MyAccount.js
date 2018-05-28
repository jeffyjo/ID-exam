'use strict'

import React, { Component } from 'react'

class MyAccount extends Component {
  render () {
    return (
      <div>
        <div className="m-site-header">
          <h2 className="m-site-header__header">My account</h2>
          <p className="m-site-header__lead">John Smith (Manager) - Company name</p>
        </div>

        <div className="u-grid u-grid--2-cols u-margin--lg-v">
          <div className="m-menu">
            <a href="#" className="a-link a-link--menu a-link--menu-active m-menu__item">Account Information</a>
            <a href="#" className="a-link a-link--menu a-link--menu-inactive m-menu__item">Payment Methods</a>
            <a href="#" className="a-link a-link--menu a-link--menu-inactive m-menu__item">Change Password</a>
            <a href="#" className="a-link a-link--menu a-link--menu-inactive m-menu__item">Booked Flights</a>
          </div>

					<div>

						<form className="o-form">
							<div className="o-form__content u-pill--top u-pill--bottom">
								<div className="m-section-header o-form__header u-pill--top">
									<h3 className="m-section__header">Account Information</h3>
								</div>
								<div className="o-form__content u-grid u-grid--2-cols u-pill--bottom">
									<div className="m-form-group">
										<label htmlFor="" className="a-label m-form-group__label">Company name</label>
										<input type="text" placeholder="Company name" className="a-input" />
									</div>
									<div className="m-form-group">
										<label htmlFor="" className="a-label m-form-group__label">Tax number</label>
										<input type="text" placeholder="Tax number" className="a-input" />
									</div>
								</div>
							</div>
						</form>

						<form className="o-form u-margin--lg-v">
							<div className="o-form__content u-pill--top u-pill--bottom">
								<div className="m-section-header o-form__header u-pill--top">
									<h3 className="m-section-header__header">Account users</h3>
									<div className="m-section-header__block u-grid u-grid--3-cols-icons u-grid--center">
										<p className="m-section-header__lead">Full name</p>
										<p className="m-section-header__lead">Edit</p>
										<p className="m-section-header__lead">Manager</p>
									</div>
								</div>
								<div className="o-form__content u-pill--bottom">
									<div className="m-form-group o-form__row u-grid u-grid--3-cols-icons u-grid--center">
										<label className="m-form-group__label">test</label>
										<i>i</i>
										<label className="a-switch">
											<input type="checkbox" className="a-switch__checkbox" />
												<span className="a-switch__slider"></span>
										</label>
									</div>
								</div>
							</div>
							<button className="a-button a-button--transparent a-button--pill o-form__btn--space u-text u-text--capital">+ Add User</button>
						</form>
					</div>

        </div>

      </div>
    )
  }
}

export default MyAccount
