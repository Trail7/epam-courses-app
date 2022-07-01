import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import {
	SEARCH_BUTTON_PLACEHOLDER_TEXT,
	SEARCH_BUTTON,
} from '../../../../constants';

export const SearchBar = (props) => (
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
