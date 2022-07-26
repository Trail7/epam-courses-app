import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, type, placeholderText, onChange, value, labelText }) {
	return (
		<>
			<label htmlFor={id}>{labelText}</label>
			<input
				className='form-control me-2'
				id={id}
				type={type || 'text'}
				placeholder={placeholderText}
				onChange={onChange}
				value={value}
			/>
		</>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	placeholderText: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	labelText: PropTypes.string,
};

export default Input;
