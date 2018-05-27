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
				sex: null,
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
				sex: null,
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

		let validForm = true

    let profileParams = Object.keys(this.state.profileParams).reduce((profileParams, param) => {
			let input = form.querySelector(`#input_${param}`)
      if (input) {
        let value = input.value
        profileParams[param] = value
      } else {
				validForm = false
			}

      return profileParams
    })
		
		console.log('validForm', validForm)
		console.log(profileParams)

		if(validForm){
			this.setState({
				profileParams: profileParams
			})
		}
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

        <form className="o-form u-pill--top u-pill--bottom u-grid" method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
			
          <div className="o-form__row u-flex u-flex--space-between">
            <div className="m-form-group">
              <label htmlFor="firstName" className="a-label m-form-group__label">First name</label>
              <input className="a-input" name="firstName" autoComplete="off" placeholder="Max" type="text" />
            </div>
            <div className="m-form-group m-form-group--border-left">
              <label htmlFor="middleName" className="a-label m-form-group__label">Middle name</label>
              <input className="a-input" name="middleName" type="text" autoComplete="off" placeholder="George" />
            </div>
            <div className="m-form-group m-form-group--border-left">
              <label htmlFor="lastName" className="a-label m-form-group__label">Last name</label>
              <input className="a-input" type="text" name="lastName" autoComplete="off" placeholder="Vertsappen"/>
            </div>
          </div>

          <div className="o-form__row u-grid u-grid--2-cols">
            <div className="m-form-group">
              <label htmlFor="birthDate" className="a-label m-form-group__label">Date of birth</label>
              <input className="a-input" type="text" autoComplete="off" placeholder="eg. 28/11-1990" />
            </div>
            <div className="m-form-group m-form-group--border-left u-grid u-grid--2-cols u-grid--center">
              <div className="m-radio">
                <input type="radio" name="sex" autoComplete="off" id="createProfileSex1" className="m-radio__input" />
                <label htmlFor="createProfileSex1" className="m-radio__label">MALE</label>
              </div>
              <div className="m-radio">
                <input type="radio" name="sex" autoComplete="off" id="createProfileSex2" className="m-radio__input" />
                <label htmlFor="createProfileSex2" className="m-radio__label">FEMALE</label>
              </div>
            </div>
          </div>

          <div className="o-form__row u-grid u-grid--2-cols">
            <div className="m-form-group">
              <label htmlFor="mail" className="a-label m-form-group__label">E-mail</label>
              <input className="a-input" type="text" autoComplete="off" placeholder="Max@verstappen.com"  />
            </div>
            <div className="m-form-group m-form-group--border-left">
              <label htmlFor="phoneNumber" className="a-label m-form-group__label">Phone number (optional)</label>
              <input className="a-input" type="text" autoComplete="off" placeholder="12345678" />
            </div>
          </div>

					<div className="o-form__row u-grid u-grid--2-cols">
            <div className="m-form-group">
              <label htmlFor="companyName" className="a-label m-form-group__label">Company name</label>
              <input className="a-input" type="text" autoComplete="off" placeholder="Vestas" />
            </div>
            <div className="m-form-group m-form-group--border-left">
              <label htmlFor="taxNumber" className="a-label m-form-group__label">Tax number</label>
              <input className="a-input" type="text" autoComplete="off" placeholder="12345678" />
            </div>
          </div>

					<div className="o-form__row u-grid u-grid--2-cols">
						<div className="m-form-group">
							<input className="a-input" type="text" autoComplete="off" placeholder="Password" />
						</div>
						<div className="m-form-group m-form-group--border-left">
							<input className="a-input" type="text" autoComplete="off" placeholder="Repeat password" />
						</div>
					</div>
					<button type="submit" className="a-button a-button--primary a-button--pill u-grid__item--right">Register</button>
        </form>

      </div>
    )
  }
}

export default CreateProfile
