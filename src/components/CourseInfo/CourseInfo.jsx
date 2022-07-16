import React from 'react';
import { BACK_BUTTON } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../selectors';

export const CourseInfo = () => {
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const { courseId } = useParams();

	const course = courses.find((course) => course.id === courseId);

	return (
		<div className='card container border px-5 py-2'>
			<div>
				<Link to='/courses'>{BACK_BUTTON}</Link>
			</div>
			<h1 className='text-center mb-5'>{course.title}</h1>
			<div className='row'>
				<div className='col-md-8 pe-5'>{course.description}</div>
				<div className='col-md-4'>
					<p>
						<strong>ID: </strong>
						{course.id}
					</p>
					<p>
						<strong>Duration: </strong>
						{course.duration}
					</p>
					<p>
						<strong>Created: </strong>
						{course.creationDate}
					</p>
					<p>
						<strong>Authors: </strong>
						{course.authors
							.map((id) => authors.find((el) => el.id === id).name)
							.join(', ')}
					</p>
				</div>
			</div>
		</div>
	);
};
