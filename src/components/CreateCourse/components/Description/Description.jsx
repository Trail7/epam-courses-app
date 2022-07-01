import React from 'react';
import {
	NEW_COURSE_DESCRIPTION,
	NEW_COURSE_DESCRIPTION_PLACEHOLDER,
} from '../../../../constants';
import { Textarea } from '../../../../common/Textarea/Textarea';

export const Description = ({
	newCourseCandidate,
	updateNewCourseCandidate,
}) => (
	<Textarea
		id={NEW_COURSE_DESCRIPTION}
		labelText={NEW_COURSE_DESCRIPTION}
		placeholder={NEW_COURSE_DESCRIPTION_PLACEHOLDER}
		onChange={(event) => {
			updateNewCourseCandidate({
				...newCourseCandidate,
				description: event.target.value,
			});
		}}
	/>
);
