'use strict'

import React, { Component } from 'react'

class MyAccount extends Component {
	constructor(props){
		super(props)

		this.state = {
			userLoggedIn: {
				firstName: this.props.user.firstName,
				middleName: this.props.user.middleName,
				lastName: this.props.user.lastName,
				companyName: this.props.user.companyName,
				taxNumber: this.props.user.taxNumber,
				birthDate: this.props.user.birthDate,
				phoneNumber: this.props.user.phoneNumber,
				mail: this.props.user.mail
			},
			defaultUser : {
				firstName: '',
				middleName: '',
				lastName: '',
				companyName: '',
				taxNumber: '',
				birthDate: '',
				phoneNumber: '',
				mail: ''
			},
			userToEdit : {
				firstName: null,
				middleName: null,
				lastName: null,
				companyName: null,
				taxNumber: null,
				birthDate: null,
				phoneNumber: null,
				mail: null
			},
			users: [

			]
		}

		this.onAddClicked = this.onAddClicked.bind(this)
		this.onEditClicked = this.onEditClicked.bind(this)
		this.toggleEdit = this.toggleEdit.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.addPerson = this.addPerson.bind(this)

		this.form = React.createRef()
	}

	onAddClicked(){
		this.toggleEdit()
		this.setAccountInfo(true)
	}

	onEditClicked(){
		this.toggleEdit()
		this.setAccountInfo(false)
	}

	toggleEdit(){
		let isEditting = this.state.isEditting

		this.setState({
			isEditting: !isEditting
		})
	}

	setAccountInfo(isDefault){
		let userToEdit = isDefault ? this.state.defaultUser : this.state.userLoggedIn

		this.setState({
			userToEdit: userToEdit,
			newUser: isDefault
		})
	}

	onFormSubmit(e){
		e.preventDefault()

		this.addPerson()
	}

	addPerson(){
		if(this.state.newUser){
			let form = this.form.current

			let newUserParams = Object.keys(this.state.userToEdit).reduce((newUserParams, param) => {
				let input = form.querySelector(`#input_${param}`)
				
				if (input) {
					let value = input.value
					newUserParams[param] = value
				}
	
				return newUserParams
			}, {});
			
			let users = this.state.users

			users = users.push(newUserParams)

			this.setState({
				users: users
			})
		}

		this.toggleEdit()
	}

  render () {

		let numberOfUsers = this.state.users.length

    return (
      <div>
        <div className="m-site-header">
          <h2 className="m-site-header__header">My account</h2>
          <p className="m-site-header__lead">{this.state.userLoggedIn.firstName} {this.state.userLoggedIn.middleName} {this.state.userLoggedIn.lastName} (Manager) - {this.state.userLoggedIn.companyName}</p>
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
										<label className="m-form-group__label m-form-group__label--title">{this.state.userLoggedIn.companyName}</label>
									</div>
									<div className="m-form-group">
										<label htmlFor="" className="a-label m-form-group__label">Tax number</label>
										<label className="m-form-group__label m-form-group__label--title">{this.state.userLoggedIn.taxNumber}</label>
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
										<label className="m-form-group__label m-form-group__label--title">{this.state.userLoggedIn.firstName} {this.state.userLoggedIn.middleName} {this.state.userLoggedIn.lastName}</label>
										<a onClick={this.onEditClicked}>
											<span className="a-icon a-icon--edit"></span>
										</a>
										<label className="a-switch">
											<input type="checkbox" className="a-switch__checkbox" />
												<span className="a-switch__slider"></span>
										</label>
									</div>
								</div>

								{	
									<div className="o-form__content u-pill--bottom">
										<div className="m-form-group o-form__row u-grid u-grid--3-cols-icons u-grid--center">
											<label className="m-form-group__label m-form-group__label--title">{this.state.userLoggedIn.firstName} {this.state.userLoggedIn.middleName} {this.state.userLoggedIn.lastName}</label>
											<a onClick={this.onEditClicked}>
												<span className="a-icon a-icon--edit"></span>
											</a>
											<label className="a-switch">
												<input type="checkbox" className="a-switch__checkbox" />
													<span className="a-switch__slider"></span>
											</label>
										</div>
									</div>
								}

							</div>
						</form>
						<button onClick={this.onAddClicked} className="a-button a-button--transparent a-button--pill u-text u-text--capital">+ Add User</button>
					</div>

        </div>

				{ this.state.isEditting === true ?
					<div className="u-overlay u-overlay--active">
						<div className="u-grid u-grid--center u-grid--full-height">
							<form className="o-form u-flex u-flex--column" method='GET' ref={this.form} onSubmit={this.onFormSubmit}>
								<button onClick={this.toggleEdit} className="a-button a-button--secondary a-button--circle-sm u-flex__item--right u-margin--md-v">&times;</button>
								<div className="o-form__content u-pill--top u-pill--bottom">
									
									<div className="o-form__row u-flex u-flex--space-between">
										<div className="m-form-group">
											<label htmlFor="input_firstName" className="a-label m-form-group__label">First name</label>
											<input type="text" placeholder="First name" id="input_firstName" className="a-input" defaultValue={this.state.userToEdit.firstName} />
										</div>
										<div className="m-form-group m-form-group--border-left">
											<label htmlFor="input_middleName" className="a-label m-form-group__label">Middle name</label>
											<input type="text" placeholder="Middle name" id="input_middleName" className="a-input" defaultValue={this.state.userToEdit.middleName} />
										</div>
										<div className="m-form-group m-form-group--border-left">
											<label htmlFor="input_lastName" className="a-label m-form-group__label">lastName</label>
											<input type="text" placeholder="lastName" id="input_lastName" className="a-input" defaultValue={this.state.userToEdit.lastName} />
										</div>
									</div>
									
									<div className="o-form__row u-grid u-grid--2-cols">
										<div className="m-form-group">
											<label htmlFor="input_birthDate" className="a-label m-form-group__label">birthDate</label>
											<input type="text" placeholder="birthDate" id="input_birthDate" className="a-input" defaultValue={this.state.userToEdit.birthDate} />
										</div>
										<div className="m-form-group m-form-group--border-left u-grid u-grid--2-cols u-grid--center">
											<div className="m-radio">
												<input type="radio" name="sex" value="male" id="input_male" className="m-radio__input" />
												<label htmlFor="input_male" className="m-radio__label">MALE</label>
											</div>
											<div className="m-radio">
												<input type="radio" name="sex" value="female" id="input_female" className="m-radio__input" />
												<label htmlFor="input_female" className="m-radio__label">FEMALE</label>
											</div>
										</div>
									</div>
									
									<div className="o-form__row u-grid u-grid--2-cols">
										<div className="m-form-group">
											<label htmlFor="input_mail" className="a-label m-form-group__label">E-mail</label>
											<input type="text" placeholder="mail" id="input_mail" className="a-input" defaultValue={this.state.userToEdit.mail} />
										</div>
										<div className="m-form-group m-form-group--border-left">
											<label htmlFor="input_phoneNumber" className="a-label m-form-group__label">Phone number</label>
											<input type="text" placeholder="phoneNumber" id="input_phoneNumber" className="a-input" defaultValue={this.state.userToEdit.phoneNumber} />
										</div>
									</div>
									
								</div>
								<button type="submit" className="a-button a-button--primary a-button--pill u-flex__item--right u-margin--md-v">Save</button>
							</form>
						</div>
					</div>
					: ''
				}

      </div>
    )
  }
}

export default MyAccount
