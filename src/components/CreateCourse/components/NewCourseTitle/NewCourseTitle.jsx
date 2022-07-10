import React from 'react';
import {
	NEW_COURSE_TITLE,
	NEW_COURSE_TITLE_PLACEHOLDER,
} from '../../../../constants';
import Input from '../../../../common/Input/Input';
import PropTypes from 'prop-types';

function NewCourseTitle({ updateNewCourseCandidate, newCourseCandidate }) {
	return (
		<Input
			id={NEW_COURSE_TITLE}
			labelText={NEW_COURSE_TITLE}
			placeholderText={NEW_COURSE_TITLE_PLACEHOLDER}
			onChange={(event) =>
				updateNewCourseCandidate({
					...newCourseCandidate,
					title: event.target.value,
				})
			}
		/>
	);
}
NewCourseTitle.propTypes = {
	updateNewCourseCandidate: PropTypes.func,
	newCourseCandidate: PropTypes.object,
};

export default NewCourseTitle;
