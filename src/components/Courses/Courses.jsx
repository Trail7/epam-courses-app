import React, { useEffect, useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_BUTTON } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { fetchAllCourses } from '../../store/courses/actions';
import { useSelector } from 'react-redux';
import store from '../../store';
import { getAuthors, getCourses } from '../../selectors';
import { fetchAllAuthors } from '../../store/authors/actions';

export default function Courses() {
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');
	const [coursesList, filterCoursesList] = useState(courses);

	const filteredList = courses.filter((course) => {
		return (
			course.id.toLowerCase().includes(searchValue.toLowerCase()) ||
			course.title.toLowerCase().includes(searchValue.toLowerCase())
		);
	});

	useEffect(() => {
		if (courses.length === 0) store.dispatch(fetchAllCourses());
		if (authors.length === 0) store.dispatch(fetchAllAuthors());
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		filterCoursesList(courses);
	}, [courses]);

	const handleClick = (event) => {
		event.preventDefault();
		filterCoursesList(filteredList);
	};

	const handleChange = (event) => {
		setSearchValue(event.target.value);
		if (!event.target.value) filterCoursesList(courses);
	};

	const getAuthorsById = (list) => {
		return list.map((id) =>
			authors.filter((author) => author.id === id).map((author) => author.name)
		);
	};

	const renderCourses = () => {
		return coursesList.map((course) => {
			return (
				<CourseCard
					key={course.id}
					course={course}
					authors={getAuthorsById(course.authors)}
				/>
			);
		});
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
			{renderCourses()}
		</div>
	);
}
