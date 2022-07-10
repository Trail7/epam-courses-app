import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
	return (
		<div className='row'>
			<label>
				{props.labelText}
				<textarea
					id={props.id}
					className='form-control mb-4'
					rows='3'
					placeholder={props.placeholder}
					onChange={props.onChange}
				>
					{props.text}
				</textarea>
			</label>
		</div>
	);
}

Textarea.propTypes = {
	id: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	text: PropTypes.string,
};

export default Textarea;
