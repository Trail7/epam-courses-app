import React from 'react';

export const Textarea = (props) => (
	<>
		<label htmlFor={props.id}>{props.labelText}</label>
		<textarea
			id={props.id}
			className='form-control mb-4'
			rows='3'
			placeholder={props.placeholder}
			onChange={props.onChange}
		>
			{props.text}
		</textarea>
	</>
);
