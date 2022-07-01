import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	SEARCH_BUTTON_PLACEHOLDER_TEXT,
	SEARCH_BUTTON,
} from '../../../../constants';
import PropTypes from 'prop-types';

function SearchBar(props) {
	return (
		<div className='form-group mb-4 mt-4'>
			<form className='d-flex' role='search'>
				<Input
					onChange={props.onChange}
					placeholderText={SEARCH_BUTTON_PLACEHOLDER_TEXT}
				/>
				<Button buttonText={SEARCH_BUTTON} onClick={props.onClick} />
			</form>
		</div>
	);
}

SearchBar.propTypes = {
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};

export default SearchBar;
