import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ labelText, text, id, value, onChange, placeholder }) {
	return (
		<div className='row'>
			<label>
				{labelText}
				<textarea
					id={id}
					className='form-control mb-4'
					rows='3'
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				>
					{text}
				</textarea>
			</label>
		</div>
	);
}

Textarea.propTypes = {
	labelText: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	text: PropTypes.string,
	value: PropTypes.string,
};

export default Textarea;
