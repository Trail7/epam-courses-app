import React, { useEffect, useState } from 'react';
import {
	NEW_COURSE_ADD_AUTHOR_BUTTON,
	NEW_COURSE_AUTHOR_TITLE,
} from '../../../../constants';
import { AuthorItem } from '../AuthorItem/AuthorItem';

export const UnAssignedAuthors = ({
	newCourseCandidate,
	updateNewCourseCandidate,
	authorsList,
}) => {
	const [authorsForNewCourse, filterAuthorsForNewCourse] =
		useState(authorsList);
	function filterAuthors() {
		if (newCourseCandidate.authors.length < 1)
			filterAuthorsForNewCourse(authorsList);
		const filtered = [...authorsList].filter(
			(i) => !newCourseCandidate.authors.includes(i.id)
		);
		filterAuthorsForNewCourse(filtered);
	}

	useEffect(() => {
		filterAuthors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authorsList, newCourseCandidate]);
	return (
		<>
			<h5 className='text-center'>{NEW_COURSE_AUTHOR_TITLE}</h5>
			{authorsForNewCourse.map((author) => (
				<div className='mb-2' key={author.id}>
					<AuthorItem
						id={author.id}
						name={author.name}
						buttonText={NEW_COURSE_ADD_AUTHOR_BUTTON}
						onClick={(event) => {
							const newCourseCandidateClone = { ...newCourseCandidate };
							newCourseCandidateClone.authors.push(event.target.id);
							updateNewCourseCandidate(newCourseCandidateClone);
							filterAuthors();
						}}
					/>
				</div>
			))}
		</>
	);
};
