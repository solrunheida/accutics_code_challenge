import React, { Component } from 'react';
import StepConfirmation from './StepConfirmation';
import StepUserInfo from './StepUserInfo';
import StepAdditionalInfo from './StepAdditionalInfo';

export class SignUpFlow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			birthday: '',
			city: '',
			comment: '',
			formIsValid: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}

	nextStep = (e) => {
		e.preventDefault();
		this.setState({
			step: this.state.step + 1,
		});
	};

	clearForm() {
		this.setState({
			step: 1,
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			birthday: '',
			city: '',
			comment: '',
			formIsValid: false,
		});
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value }, () => {
			this.setState({ formIsValid: this.isFormValid() });
		});
	}

	isFormValid() {
		if (this.state.step === 1) {
			const { firstName, lastName, email, password } = this.state;
			if (
				firstName.length === 0 ||
				lastName.length === 0 ||
				email.length === 0 ||
				password.length < 3
			) {
				return false;
			}
		}
		return true;
	}

	hidePassword(password) {
		let pw = '';
		const pwLength = password.length;
		for (let i = 0; i < pwLength; i++) {
			pw += '*';
		}
		return pw;
	}

	render() {
		const { firstName, lastName, email, password, birthday, city, comment } =
			this.state;
		const userInput = {
			firstName,
			lastName,
			email,
			password,
			birthday,
			city,
			comment,
		};

		switch (this.state.step) {
			case 1:
				return (
					<StepUserInfo
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						validForm={this.state.formIsValid}
					/>
				);
			case 2:
				return (
					<StepAdditionalInfo
						nextStep={this.nextStep}
						handleChange={this.handleChange}
					/>
				);
			case 3:
				return (
					<StepConfirmation
						clearForm={this.clearForm}
						userInput={userInput}
						hidePassword={this.hidePassword}
					/>
				);
			default:
				console.log('unexpected step');
		}
	}
}

export default SignUpFlow;
