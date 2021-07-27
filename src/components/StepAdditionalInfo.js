import InputField from './InputField';

function StepAdditionalInfo(props) {
	return (
		<div>
			<h1 className='title'>Additional information:</h1>
			<form>
				<InputField
					name='birthday'
					label='Birthday'
					placeholder='Enter your birthday'
					type='date'
					inputChange={props.handleChange}
				/>

				<InputField
					name='city'
					label='City'
					placeholder='Enter city name'
					inputChange={props.handleChange}
				/>

				<div className='input-field field'>
					<label className='label' htmlFor='comment'>
						Comment
					</label>
					<div className='control'>
						<textarea
							className='textarea'
							id='comment'
							name='comment'
							placeholder='Enter a comment if you want'
							onChange={props.handleChange}
						/>
					</div>
				</div>
				<div className='buttons is-right'>
					<button className='button' onClick={props.nextStep}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default StepAdditionalInfo;
