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
			users: [],
			modes : [
				"accountInformation",
				"bookedFlights"
			],
			currentMode: "accountInformation"
		}

		this.onAddClicked = this.onAddClicked.bind(this)
		this.onEditClicked = this.onEditClicked.bind(this)
		this.toggleEdit = this.toggleEdit.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.addPerson = this.addPerson.bind(this)
		this.onModeToggle = this.onModeToggle.bind(this)

		this.form = React.createRef()
	}

	onAddClicked(){
		this.toggleEdit()
		this.setAccountInfo(true)
	}

	onEditClicked(index){

	}

	onEditClicked(index){
		index <= 0 ? this.setAccountInfo(false, this.state.users[index], index) : this.setAccountInfo(false)

		this.toggleEdit()
	}

	toggleEdit(){
		let isEditting = this.state.isEditting

		this.setState({
			isEditting: !isEditting
		})
	}

	setAccountInfo(isDefault, user = this.state.userLoggedIn, index = -1){
		let userToEdit = isDefault ? this.state.defaultUser : user

		this.setState({
			userToEdit: userToEdit,
			newUser: isDefault,
			userToEditId: index
		})
	}

	onFormSubmit(e){
		e.preventDefault()

		this.addPerson()
	}

	addPerson(){
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

		this.state.newUser === true ? users.push(newUserParams) : users[this.state.userToEditId] = newUserParams

		this.setState({
			users: users
		})
		
		this.toggleEdit()
	}

	onModeToggle(e){
		this.setState({
			currentMode: e.target.getAttribute('data-link')
		})
	}

  render () {

		let numberOfUsers = this.state.users.length
		let users = this.state.users

    return (
      <div>
        <div className="m-site-header">
          <h2 className="m-site-header__header">My account</h2>
          <p className="m-site-header__lead">{this.state.userLoggedIn.firstName} {this.state.userLoggedIn.middleName} {this.state.userLoggedIn.lastName} (Manager) - {this.state.userLoggedIn.companyName}</p>
        </div>

        <div className="o-account">
          <div className="m-menu">
            <a href="#" onClick={this.onModeToggle} data-link="accountInformation" className={`a-link a-link--menu m-menu__item ${this.state.currentMode === 'accountInformation' ? 'a-link--menu-active' : 'a-link--menu-inactive'}`}>Account Information</a>
            <a href="#" onClick={this.onModeToggle} data-link="paymentMethods" className={`a-link a-link--menu m-menu__item ${this.state.currentMode === 'paymentMethods' ? 'a-link--menu-active' : 'a-link--menu-inactive'}`}>Payment Methods</a>
            <a href="#" onClick={this.onModeToggle} data-link="changePassword" className={`a-link a-link--menu m-menu__item ${this.state.currentMode === 'changePassword' ? 'a-link--menu-active' : 'a-link--menu-inactive'}`}>Change Password</a>
            <a href="#" onClick={this.onModeToggle} data-link="bookedFlights" className={`a-link a-link--menu m-menu__item ${this.state.currentMode === 'bookedFlights' ? 'a-link--menu-active' : 'a-link--menu-inactive'}`}>Booked Flights</a>
          </div>

					{ this.state.currentMode === 'accountInformation' ?
					<div className="o-account__content">
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

						<form className="o-form">
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
										<a onClick={() => {this.onEditClicked(-1)}}>
											<span className="a-icon a-icon--edit"></span>
										</a>
										<label className="a-switch">
											<input type="checkbox" className="a-switch__checkbox" />
												<span className="a-switch__slider"></span>
										</label>
									</div>
								</div>

								{	numberOfUsers > 0 ?
									users.map((user, i) => {
										return (
											<div key={i} className="o-form__content u-pill--bottom">
												<div className="m-form-group o-form__row u-grid u-grid--3-cols-icons u-grid--center">
													<label className="m-form-group__label m-form-group__label--title">{user.firstName} {user.middleName} {user.lastName}</label>
													<a onClick={() => { this.onEditClicked(i) }}>
														<span className="a-icon a-icon--edit"></span>
													</a>
													<label className="a-switch">
														<input type="checkbox" className="a-switch__checkbox" />
															<span className="a-switch__slider"></span>
													</label>
												</div>
											</div>
										)
									})
									: ''
								}

							</div>
						</form>
						<button onClick={this.onAddClicked} className="a-button a-button--transparent a-button--pill u-text u-text--capital">+ Add User</button>
					</div>
					: ''
					}
					{ this.state.currentMode === 'bookedFlights' ?
					<div className="o-account__content">
						<form className="o-form">
							<div className="m-section-header o-form__header u-pill--top">
								<h3 className="m-section__header">Booked Flights</h3>
							</div>

							<div className="o-form__content u-pill--bottom">
								<div className="o-booked-flight">
									<div className="o-booked-flight__details">
										<p>RIX - CPH - RIX</p>
										<div>
											<div className="m-form-group">
												<label className="a-label m-form-group__label">Date</label>
												<label className="m-form-group__label m-form-group__label--title">31.06.18</label>
											</div>
											<div className="m-form-group">
												<label className="a-label m-form-group__label">Booked by</label>
												<label className="m-form-group__label m-form-group__label--title">{this.state.userLoggedIn.firstName} {this.state.userLoggedIn.middleName} {this.state.userLoggedIn.lastName}</label>
											</div>
										</div>
									</div>
									<div className="o-booked-flight__actions">
										<a href="https://drive.google.com/file/d/1yLEozmaBflLI7VJOUfMGChj73BnBapyA/view?usp=sharing" target="blank">
											<i>
												<span className="a-icon a-icon--invoice"></span>
											</i>
										</a>
									</div>
								</div>
							</div>

						</form>
					</div>
					: ''
					}
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
