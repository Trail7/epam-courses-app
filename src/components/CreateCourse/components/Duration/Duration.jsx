import React from 'react';
import {
	NEW_COURSE_DURATION_LABEL,
	NEW_COURSE_DURATION_PLACEHOLDER,
	NEW_COURSE_DURATION_TITLE,
} from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

export const Duration = ({ updateNewCourseCandidate, newCourseCandidate }) => {
	const duration = getCourseDuration(newCourseCandidate.duration);
	return (
		<>
			<h5 className='text-center mb-4'>{NEW_COURSE_DURATION_TITLE}</h5>
			<Input
				id={NEW_COURSE_DURATION_LABEL}
				labelText={NEW_COURSE_DURATION_LABEL}
				placeholderText={NEW_COURSE_DURATION_PLACEHOLDER}
				type='number'
				onChange={(event) => {
					updateNewCourseCandidate({
						...newCourseCandidate,
						duration: parseInt(event.target.value),
					});
				}}
			/>
			<h4 className='mt-4'>
				Duration: <strong>{duration.time}</strong>
				{' ' + duration.ending}
			</h4>
		</>
	);
};
