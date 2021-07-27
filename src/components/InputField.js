function InputField(props) {
	const inputType = props.type ? props.type : 'text';
	return (
		<div className='input-field field'>
			<label className='label'>
				{props.label}
				<div className='control'>
					<input
						type={inputType}
						name={props.name}
						placeholder={props.placeholder}
						onChange={props.inputChange}
						className='input'
					/>
				</div>
			</label>
			<p className='helper-text help'>{props.helpText}</p>
		</div>
	);
}

export default InputField;
