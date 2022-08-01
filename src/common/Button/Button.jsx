import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, onClick, buttonText, icon, testid }) {
	return (
		<button
			id={id}
			className='btn btn-outline-primary ms-2'
			type='submit'
			onClick={onClick}
			data-testid={testid}
		>
			{icon}
			{buttonText}
		</button>
	);
}

Button.propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func,
	buttonText: PropTypes.string,
	icon: PropTypes.object,
	testid: PropTypes.string,
};

export default Button;
