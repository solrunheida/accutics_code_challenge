function StepConfirmation(props) {
	const input = props.userInput;
	return (
		<div>
			<h1 className='title'>Confirmation:</h1>

			<div className='confirmation-label'>First name</div>
			<div className='user-input'>{input.firstName}</div>

			<div className='confirmation-label'>Last name</div>
			<div className='user-input'>{input.lastName}</div>

			<div className='confirmation-label'>Email</div>
			<div className='user-input'>{input.email}</div>

			<div className='confirmation-label'>Password</div>
			<div className='user-input'>{props.hidePassword(input.password)}</div>

			<div className='confirmation-label'>Birthday</div>
			<div className='user-input'>{input.birthday}</div>

			<div className='confirmation-label'>City</div>
			<div className='user-input'>{input.city}</div>

			<div className='confirmation-label'>Comment</div>
			<div className='user-input'>{input.comment}</div>

			<div className='buttons is-right'>
				<button className='button' onClick={props.clearForm}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default StepConfirmation;
