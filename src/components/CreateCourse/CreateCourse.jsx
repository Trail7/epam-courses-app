import React, { useEffect, useState } from 'react';
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
import PropTypes from 'prop-types';

function CreateCourse({ onNewAuthorCreated, authorsList, onNewCourseCreated }) {
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
								onNewCourseCreated(newCourseCandidate);
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
						<AddAuthor addNewAuthor={onNewAuthorCreated} />
					</div>
					<div className='col-md-6'>
						<UnAssignedAuthors
							authorsList={authorsList}
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
							authorsList={authorsList}
							updateNewCourseCandidate={updateNewCourseCandidate}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

CreateCourse.propTypes = {
	onNewAuthorCreated: PropTypes.func,
	authorsList: PropTypes.arrayOf(PropTypes.object),
	onNewCourseCreated: PropTypes.func,
};

export default CreateCourse;
