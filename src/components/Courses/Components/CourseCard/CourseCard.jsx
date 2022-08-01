import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import {
	COURSE_CARD_AUTHORS_LABEL,
	COURSE_CARD_BUTTON,
	COURSE_CARD_CREATED_LABEL,
	COURSE_CARD_DURATION_LABEL,
} from '../../../../constants';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../../../../common/SVG/deleteIcon';
import { EditIcon } from '../../../../common/SVG/editIcon';
import { useSelector } from 'react-redux';
import { getAuthors, getUser } from '../../../../selectors';
import store from '../../../../store';
import { removeCourse } from '../../../../store/courses/thunk';

function CourseCard({ course }) {
	const user = useSelector(getUser);
	const authors = useSelector(getAuthors);
	const navigate = useNavigate();

	const handleCourseRemoval = () => {
		store.dispatch(removeCourse(course.id, user.token));
	};

	const handleCourseEdit = () => {
		navigate(`/courses/update/${course.id}`);
	};

	const getAuthorsById = (list) => {
		return list.map((id) =>
			authors.filter((author) => author.id === id).map((author) => author.name)
		);
	};

	const renderEditRemoveButtons = () => {
		return user.role === 'admin' ? (
			<>
				<Button onClick={handleCourseEdit} icon={<EditIcon />} />
				<Button onClick={handleCourseRemoval} icon={<DeleteIcon />} />
			</>
		) : null;
	};
	return (
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
								<span data-testid='course-card-authors-list'>
									{getAuthorsById(course.authors).join(', ')}
								</span>
							</p>
						)}
						{course.duration && (
							<p>
								<strong>{COURSE_CARD_DURATION_LABEL}</strong>
								<span data-testid='formatted-course-duration'>
									{getCourseDuration(course.duration).formatted}
								</span>
							</p>
						)}
						{course.creationDate && (
							<p>
								<strong>{COURSE_CARD_CREATED_LABEL}</strong>
								<span data-testid='formatted-course-creation-date'>
									{formatCreationDate(course.creationDate)}
								</span>
							</p>
						)}
						<Button
							onClick={() => navigate(`/courses/${course.id}`)}
							buttonText={COURSE_CARD_BUTTON}
						/>
						{renderEditRemoveButtons()}
					</div>
				</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	course: PropTypes.object,
};

export default CourseCard;
