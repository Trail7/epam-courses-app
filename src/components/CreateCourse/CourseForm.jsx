import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getCourses, getUser } from '../../selectors';
import {
	ALERT_VALIDATION,
	CREATE_COURSE_BUTTON,
	UPDATE_COURSE_BUTTON,
} from '../../constants';

import Button from '../../common/Button/Button';
import Duration from './components/Duration/Duration';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Description from './components/Description/Description';
import AssignedAuthorsList from './components/AssignedAuthorsList/AssignedAuthorsList';
import NewCourseTitle from './components/NewCourseTitle/NewCourseTitle';
import UnAssignedAuthors from './components/UnAssignedAuthors/UnAssignedAuthors';

import store from '../../store';
import {
	createNewCourse,
	fetchAllCourses,
	updateCourseById,
} from '../../store/courses/thunk';
import { useSelector } from 'react-redux';
import { fetchAllAuthors } from '../../store/authors/thunk';

export default function CourseForm() {
	const coursesList = useSelector(getCourses);
	const { token } = useSelector(getUser);
	const { courseId } = useParams();
	const navigate = useNavigate();
	const [newCourseCandidate, updateNewCourseCandidate] = useState({
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});
	const [isFormValid, validateCourseCandidate] = useState(false);

	useEffect(() => {
		validateCourseCandidate(
			newCourseCandidate.title.length > 0 &&
				newCourseCandidate.description.length > 1 &&
				newCourseCandidate.duration > 0 &&
				newCourseCandidate.authors.length > 0 &&
				true
		);
	}, [newCourseCandidate]);

	useEffect(() => {
		if (courseId) {
			const { title, description, duration, authors } = coursesList.find(
				(item) => item.id === courseId
			);
			updateNewCourseCandidate({
				title,
				description,
				duration,
				authors,
			});
		}
		// eslint-disable-next-line
	}, [courseId]);

	useEffect(() => {
		store.dispatch(fetchAllCourses());
		store.dispatch(fetchAllAuthors());
	}, []);

	const renderCreateUpdateButtons = () => {
		return courseId ? (
			<Button
				buttonText={UPDATE_COURSE_BUTTON}
				onClick={() => {
					if (isFormValid) {
						store.dispatch(
							updateCourseById(newCourseCandidate, courseId, token)
						);
						navigate('/courses');
					} else {
						alert(ALERT_VALIDATION);
					}
				}}
			/>
		) : (
			<Button
				buttonText={CREATE_COURSE_BUTTON}
				onClick={() => {
					if (isFormValid) {
						store.dispatch(createNewCourse(newCourseCandidate, token));
						navigate('/courses');
					} else {
						alert(ALERT_VALIDATION);
					}
				}}
			/>
		);
	};

	return (
		<div className='container border'>
			<div className='row mb-2 mt-4'>
				<div className='col-md-4'>
					<NewCourseTitle
						updateNewCourseCandidate={updateNewCourseCandidate}
						newCourseCandidate={newCourseCandidate}
					/>
				</div>
				<div className='d-flex justify-content-end col-md-8 align-items-end'>
					{renderCreateUpdateButtons()}
				</div>
			</div>
			<Description
				updateNewCourseCandidate={updateNewCourseCandidate}
				newCourseCandidate={newCourseCandidate}
			/>
			<div className='container border mb-4'>
				<div className='row mb-4 mt-4'>
					<div className='col-md-6'>
						<AddAuthor />
					</div>
					<div className='col-md-6'>
						<UnAssignedAuthors
							newCourseCandidate={newCourseCandidate}
							updateNewCourseCandidate={updateNewCourseCandidate}
						/>
					</div>
				</div>
				<div className='row mb-4'>
					<div className='col-md-6'>
						<Duration
							updateNewCourseCandidate={updateNewCourseCandidate}
							newCourseCandidate={newCourseCandidate}
						/>
					</div>
					<div className='col-md-6'>
						<AssignedAuthorsList
							newCourseCandidate={newCourseCandidate}
							updateNewCourseCandidate={updateNewCourseCandidate}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
