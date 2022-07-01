import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return (
		<button
			id={props.id}
			className='btn btn-outline-primary'
			type='submit'
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
}

Button.propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func,
	buttonText: PropTypes.string,
};

export default Button;
