import React from 'react';

export const Button = (props) => (
	<button
		id={props.id}
		className='btn btn-outline-primary'
		type='submit'
		onClick={props.onClick}
	>
		{props.buttonText}
	</button>
);
