import React from 'react';
import {
	NEW_COURSE_AUTHORS_LIST_EMPTY,
	NEW_COURSE_AUTHORS_LIST_TITLE,
	NEW_COURSE_DELETE_AUTHOR,
} from '../../../../constants';
import { AuthorItem } from '../AuthorItem/AuthorItem';

export const AssignedAuthorsList = ({
	newCourseCandidate,
	authorsList,
	updateNewCourseCandidate,
}) => (
	<>
		<h5 className='text-center mb-4'>{NEW_COURSE_AUTHORS_LIST_TITLE}</h5>
		{newCourseCandidate.authors.length > 0 ? (
			<div>
				{newCourseCandidate.authors.map((id) => (
					<div className='mb-2' key={id}>
						<AuthorItem
							id={id}
							name={authorsList.find((item) => item.id === id).name}
							buttonText={NEW_COURSE_DELETE_AUTHOR}
							onClick={(e) =>
								updateNewCourseCandidate({
									...newCourseCandidate,
									authors: [...newCourseCandidate.authors].filter(
										(el) => el !== e.target.id
									),
								})
							}
						/>
					</div>
				))}
			</div>
		) : (
			<p className='text-center'>{NEW_COURSE_AUTHORS_LIST_EMPTY}</p>
		)}
	</>
);
