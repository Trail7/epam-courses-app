import React from 'react';

export const Input = (props) => (
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
