import React from 'react';
import Button from '../../../../common/Button/Button';
import PropTypes from 'prop-types';

function AuthorItem(props) {
	return (
		<div className='container row'>
			<div className='col-md-6 d-flex align-items-center'>
				<span className='text-truncate'>{props.name}</span>
			</div>
			<div className='col-md-6 d-flex justify-content-center'>
				<Button
					id={props.id}
					onClick={props.onClick}
					buttonText={props.buttonText}
				/>
			</div>
		</div>
	);
}

AuthorItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func,
	buttonText: PropTypes.string,
};

export default AuthorItem;
