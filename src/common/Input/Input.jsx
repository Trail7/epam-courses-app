import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
	return (
		<>
			<label htmlFor={props.id}>{props.labelText}</label>
			<input
				className='form-control me-2'
				id={props.id}
				type={props.type || 'text'}
				placeholder={props.placeholderText}
				onChange={props.onChange}
				value={props.value}
			/>
		</>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default Input;
