import React, { useState } from 'react';
import {
	NEW_COURSE_ADD_AUTHOR_CREATE_AUTHOR_BUTTON,
	NEW_COURSE_ADD_AUTHOR_TITLE,
	NEW_COURSE_NEW_AUTHOR_NAME,
	NEW_COURSE_NEW_AUTHOR_NAME_PLACEHOLDER,
} from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

export const AddAuthor = (props) => {
	const [authorInputValue, setAuthorInputValue] = useState('');

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
						props.addNewAuthor(authorInputValue);
						setAuthorInputValue('');
					}}
					buttonText={NEW_COURSE_ADD_AUTHOR_CREATE_AUTHOR_BUTTON}
				/>
			</div>
		</>
	);
};
