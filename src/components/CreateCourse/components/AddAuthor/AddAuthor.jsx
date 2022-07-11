import React, { useState } from 'react';
import {
	NEW_COURSE_ADD_AUTHOR_CREATE_AUTHOR_BUTTON,
	NEW_COURSE_ADD_AUTHOR_TITLE,
	NEW_COURSE_NEW_AUTHOR_NAME,
	NEW_COURSE_NEW_AUTHOR_NAME_PLACEHOLDER,
} from '../../../../constants';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAuthors } from '../../../../selectors';
import { v4 as uuidv4 } from 'uuid';
import store from '../../../../store';
import { addNewAuthor } from '../../../../store/authors/actions';

function AddAuthor() {
	const authors = useSelector(getAuthors);
	const [authorInputValue, setAuthorInputValue] = useState('');

	function handleAddNewAuthor(value) {
		const authorsListCandidate = [...authors];
		const authorCandidate = {
			id: uuidv4(),
			name: value,
		};
		authorsListCandidate.push(authorCandidate);
		store.dispatch(addNewAuthor(authorsListCandidate));
	}

	return (
		<>
			<h5 className='text-center'>{NEW_COURSE_ADD_AUTHOR_TITLE}</h5>
			<div className='mb-4'>
				<Input
					onChange={(event) => {
						setAuthorInputValue(event.target.value);
					}}
					id={NEW_COURSE_NEW_AUTHOR_NAME}
					labelText={NEW_COURSE_NEW_AUTHOR_NAME}
					placeholderText={NEW_COURSE_NEW_AUTHOR_NAME_PLACEHOLDER}
					value={authorInputValue}
				/>
			</div>
			<div className='text-center'>
				<Button
					onClick={() => {
						if (authorInputValue.length < 2) {
							return;
						}
						handleAddNewAuthor(authorInputValue);
						setAuthorInputValue('');
					}}
					buttonText={NEW_COURSE_ADD_AUTHOR_CREATE_AUTHOR_BUTTON}
				/>
			</div>
		</>
	);
}

export default AddAuthor;
