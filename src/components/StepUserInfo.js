import InputField from './InputField';

function StepUserInfo(props) {
	return (
		<div>
			<h1 className='title'>Sign up:</h1>
			<form>
				<InputField
					name='firstName'
					label='First name *'
					placeholder='Enter first name'
					inputChange={props.handleChange}
				/>

				<InputField
					name='lastName'
					label='Last name *'
					placeholder='Enter last name'
					inputChange={props.handleChange}
				/>

				<InputField
					name='email'
					label='Email *'
					placeholder='Enter email'
					type='email'
					inputChange={props.handleChange}
				/>

				<InputField
					name='password'
					label='Password *'
					placeholder='Enter password'
					type='password'
					helpText='Your password should be min. 3 characters.'
					inputChange={props.handleChange}
				/>
				<div className='buttons is-right'>
					<button
						className='button'
						onClick={props.nextStep}
						disabled={!props.validForm}
					>
						Continue to next step
					</button>
				</div>
			</form>
		</div>
	);
}

export default StepUserInfo;
