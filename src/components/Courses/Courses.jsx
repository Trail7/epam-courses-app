import React, { useEffect, useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_BUTTON } from '../../constants';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Courses({ mockedCoursesList, mockedAuthorsList }) {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');
	const [coursesList, filterCoursesList] = useState(mockedCoursesList);
	const filteredList = mockedCoursesList.filter((course) => {
		return (
			course.id.toLowerCase().includes(searchValue.toLowerCase()) ||
			course.title.toLowerCase().includes(searchValue.toLowerCase())
		);
	});

	useEffect(() => {
		filterCoursesList(mockedCoursesList);
	}, [mockedCoursesList, mockedAuthorsList]);
	const handleClick = (event) => {
		event.preventDefault();
		filterCoursesList(filteredList);
	};

	const handleChange = (event) => {
		setSearchValue(event.target.value);
		if (!event.target.value) filterCoursesList(mockedCoursesList);
	};

	const getAuthorsById = (list) => {
		return list.map((id) =>
			mockedAuthorsList
				.filter((author) => author.id === id)
				.map((author) => author.name)
		);
	};

	return (
		<div className='container border mb-4'>
			<div className='row'>
				<div className='col-md-6'>
					<SearchBar
						onChange={(event) => handleChange(event)}
						onClick={(event) => handleClick(event)}
					/>
				</div>
				<div className='d-flex justify-content-end col-md-6 align-items-center'>
					<Button
						buttonText={ADD_NEW_COURSE_BUTTON}
						onClick={() => navigate('/courses/add')}
					/>
				</div>
			</div>

			{coursesList.map((course) => {
				return (
					<CourseCard
						key={course.id}
						course={course}
						authors={getAuthorsById(course.authors)}
					/>
				);
			})}
		</div>
	);
}

Courses.propTypes = {
	mockedCoursesList: PropTypes.arrayOf(PropTypes.object),
	mockedAuthorsList: PropTypes.arrayOf(PropTypes.object),
};

export default Courses;
