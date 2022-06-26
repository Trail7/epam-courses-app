import React from 'react';
import {
	NEW_COURSE_TITLE,
	NEW_COURSE_TITLE_PLACEHOLDER,
} from '../../../../constants';
import { Input } from '../../../../common/Input/Input';

export const NewCourseTitle = ({
	updateNewCourseCandidate,
	newCourseCandidate,
}) => (
	<Input
		id={NEW_COURSE_TITLE}
		labelText={NEW_COURSE_TITLE}
		placeholderText={NEW_COURSE_TITLE_PLACEHOLDER}
		onChange={(event) =>
			updateNewCourseCandidate({
				...newCourseCandidate,
				title: event.target.value,
			})
		}
	/>
);
