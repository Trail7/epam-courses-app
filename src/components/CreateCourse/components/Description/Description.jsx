import React from 'react';
import {
	NEW_COURSE_DESCRIPTION,
	NEW_COURSE_DESCRIPTION_PLACEHOLDER,
} from '../../../../constants';
import Textarea from '../../../../common/Textarea/Textarea';
import PropTypes from 'prop-types';

function Description({ newCourseCandidate, updateNewCourseCandidate }) {
	return (
		<Textarea
			value={newCourseCandidate.description}
			id={NEW_COURSE_DESCRIPTION}
			labelText={NEW_COURSE_DESCRIPTION}
			placeholder={NEW_COURSE_DESCRIPTION_PLACEHOLDER}
			onChange={(event) => {
				updateNewCourseCandidate({
					...newCourseCandidate,
					description: event.target.value,
				});
			}}
		/>
	);
}

Description.propTypes = {
	newCourseCandidate: PropTypes.object,
	updateNewCourseCandidate: PropTypes.func,
};

export default Description;
