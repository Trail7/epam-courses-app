import React, { useEffect, useMemo, useState } from 'react';
import { ALERT_VALIDATION, CREATE_COURSE_BUTTON } from '../../constants';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../common/Button/Button';
import Duration from './components/Duration/Duration';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Description from './components/Description/Description';
import AssignedAuthorsList from './components/AssignedAuthorsList/AssignedAuthorsList';
import NewCourseTitle from './components/NewCourseTitle/NewCourseTitle';
import UnAssignedAuthors from './components/UnAssignedAuthors/UnAssignedAuthors';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import {
	addNewCourseToStore,
	fetchAllCourses,
} from '../../store/courses/actions';
import { fetchAllAuthors } from '../../store/authors/actions';
import { useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../selectors';

export default function CreateCourse() {
	const coursesList = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const navigate = useNavigate();
	const [newCourseCandidate, updateNewCourseCandidate] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: new Date().toLocaleDateString('en-US'),
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

	useMemo(() => {
		if (coursesList.length === 0) store.dispatch(fetchAllCourses());
		if (authors.length === 0) store.dispatch(fetchAllAuthors());
	}, [coursesList, authors]);

	const handleNewCourseCreation = (value) => {
		const list = [...coursesList];
		list.push(value);
		store.dispatch(addNewCourseToStore(list));
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
					<Button
						buttonText={CREATE_COURSE_BUTTON}
						onClick={() => {
							if (isFormValid) {
								handleNewCourseCreation(newCourseCandidate);
								navigate('/courses');
							} else {
								alert(ALERT_VALIDATION);
							}
						}}
					/>
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
