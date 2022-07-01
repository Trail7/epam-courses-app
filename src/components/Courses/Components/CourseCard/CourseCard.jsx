import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import {
	COURSE_CARD_AUTHORS_LABEL,
	COURSE_CARD_BUTTON,
	COURSE_CARD_CREATED_LABEL,
	COURSE_CARD_DURATION_LABEL,
} from '../../../../constants';

export const CourseCard = ({ course, authors }) => (
	<div className='card container border mb-4'>
		<div className='row'>
			<div className='col-md-7'>
				<div className='card-body'>
					<h1>{course.title}</h1>
					<p>{course.description}</p>
				</div>
			</div>
			<div className='col-md-5'>
				<div className='card-body'>
					{course.authors && (
						<p className='text-truncate'>
							<strong>{COURSE_CARD_AUTHORS_LABEL}</strong>
							{authors.join(', ')}
						</p>
					)}
					{course.duration && (
						<p>
							<strong>{COURSE_CARD_DURATION_LABEL}</strong>
							{getCourseDuration(course.duration).formatted}
						</p>
					)}
					{course.creationDate && (
						<p>
							<strong>{COURSE_CARD_CREATED_LABEL}</strong>
							{formatCreationDate(course.creationDate)}
						</p>
					)}
					<Button buttonText={COURSE_CARD_BUTTON} />
				</div>
			</div>
		</div>
	</div>
);
