'use strict'

import React, { Component } from 'react'

class CreateProfile extends Component {

	constructor(props){
		super(props)

		this.state = {
			default: {
				firstName: null,
				middleName: null,
				lastName: null,
				birthDate: null,
				male: null,
				female: null,
				mail: null,
				phoneNumber: null,
				companyName: null,
				taxNumber: null,
				password: null,
				repeatPassword: null,
			},
			profileParams: {
				firstName: null,
				middleName: null,
				lastName: null,
				birthDate: null,
				male: null,
				female: null,
				mail: null,
				phoneNumber: null,
				companyName: null,
				taxNumber: null,
				password: null,
				repeatPassword: null
			}
		}

		this.onFormSubmit = this.onFormSubmit.bind(this)

		this.form = React.createRef()

	}

	onFormSubmit(e){
		e.preventDefault()

		this.setProfileParams()
	}

	setProfileParams(){
		let form = this.form.current

		let profileParams = Object.keys(this.state.profileParams).reduce((profileParams, param) => {
			let input = form.querySelector(`#input_${param}`)
			
      if (input) {
        let value = input.value
				profileParams[param] = value
			}

			return profileParams
		}, {});

		// GLOBAL component needed
		window.localStorage.setItem('user', JSON.stringify(profileParams))
		window.localStorage.setItem('isLoggedIn', true)

		this.setState({
			profileParams: profileParams
		})
	}

  render () {
    return (
      <div id="create">
        <div className="o-rte-block">
          <div className="m-site-header o-rte-block__item">
            <h2 className="m-site-header__header">Create Profile</h2>
          </div>
          <p className="o-rte-block__item o-rte-block__item--text o-rte-block__item--space o-rte-block__item--sm">Get access to quick booking, save favourite flights, manage your employee flights and much more</p>
        </div>

        <form className="o-form u-flex u-flex--column" method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
					<div className="o-form__content u-pill--top u-pill--bottom">
						<div className="o-form__row u-flex u-flex--space-between">
							<div className="m-form-group">
								<label htmlFor="firstName" className="a-label m-form-group__label">First name</label>
								<input className="a-input" name="firstName" id="input_firstName" autoComplete="off" placeholder="First name" type="text" />
							</div>
							<div className="m-form-group m-form-group--border-left">
								<label htmlFor="middleName" className="a-label m-form-group__label">Middle name</label>
								<input className="a-input" name="middleName" id="input_middleName" type="text" autoComplete="off" placeholder="Middle name" />
							</div>
							<div className="m-form-group m-form-group--border-left">
								<label htmlFor="lastName" className="a-label m-form-group__label">Last name</label>
								<input className="a-input" type="text" name="lastName" id="input_lastName" autoComplete="off" placeholder="Last name"/>
							</div>
						</div>

						<div className="o-form__row u-grid u-grid--2-cols">
							<div className="m-form-group">
								<label htmlFor="birthDate" className="a-label m-form-group__label">Date of birth</label>
								<input className="a-input" type="text" name="birthdate" id="input_birthDate" autoComplete="off" placeholder="Date of birth (21/1-1990)" />
							</div>
							<div className="m-form-group m-form-group--border-left u-grid u-grid--2-cols u-grid--center">
								<div className="m-radio">
									<input type="radio" name="sex" autoComplete="off" id="input_male" className="m-radio__input" />
									<label htmlFor="input_male" className="m-radio__label">MALE</label>
								</div>
								<div className="m-radio">
									<input type="radio" name="sex" autoComplete="off" id="input_female" className="m-radio__input" />
									<label htmlFor="input_female" className="m-radio__label">FEMALE</label>
								</div>
							</div>
						</div>

						<div className="o-form__row u-grid u-grid--2-cols">
							<div className="m-form-group">
								<label htmlFor="mail" className="a-label m-form-group__label">E-mail</label>
								<input className="a-input" name="mail" id="input_mail" type="text" autoComplete="off" placeholder="E-mail"  />
							</div>
							<div className="m-form-group m-form-group--border-left">
								<label htmlFor="phoneNumber" className="a-label m-form-group__label">Phone number (optional)</label>
								<input className="a-input" type="text" name="phoneNumber" id="input_phoneNumber" autoComplete="off" placeholder="Phone number" />
							</div>
						</div>

						<div className="o-form__row u-grid u-grid--2-cols">
							<div className="m-form-group">
								<label htmlFor="companyName" className="a-label m-form-group__label">Company name</label>
								<input className="a-input" type="text" name="companyName" id="input_companyName" autoComplete="off" placeholder="Company name" />
							</div>
							<div className="m-form-group m-form-group--border-left">
								<label htmlFor="taxNumber" className="a-label m-form-group__label">Tax number</label>
								<input className="a-input" type="text" name="taxNumber" id="input_taxNumber" autoComplete="off" placeholder="Tex number (eg. 12345678)" />
							</div>
						</div>

						<div className="o-form__row u-grid u-grid--2-cols">
							<div className="m-form-group">
								<input className="a-input" type="password" name="input_password" id="input_password" autoComplete="off" placeholder="Password" />
							</div>
							<div className="m-form-group m-form-group--border-left">
								<input className="a-input" type="password" name="input_repeatPassword" id="input_repeatPassword" autoComplete="off" placeholder="Repeat password" />
							</div>
						</div>
					</div>
					<button type="submit" className="a-button a-button--primary a-button--pill o-form__btn--space u-flex__item--right">Register</button>
        </form>

      </div>
    )
  }
}

export default CreateProfile
