import React, { useEffect, useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_BUTTON } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../store';
import { getCourses, getUser } from '../../selectors';
import { getUsersRole } from '../../store/user/thunk';
import { fetchAllAuthors } from '../../store/authors/thunk';
import { fetchAllCourses } from '../../store/courses/thunk';

export default function Courses() {
	const courses = useSelector(getCourses);
	const localToken = localStorage.getItem('result');
	const { role } = useSelector(getUser);
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
		store.dispatch(fetchAllCourses());
		store.dispatch(fetchAllAuthors());
	}, []);

	useEffect(() => {
		if (!role && localToken) store.dispatch(getUsersRole(localToken));
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

	const renderCourses = () => {
		return coursesList.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		});
	};

	const renderAddNewCourseButton = () => {
		return role === 'admin' ? (
			<Button
				testid='add-new-course-button'
				buttonText={ADD_NEW_COURSE_BUTTON}
				onClick={() => navigate('/courses/add')}
			/>
		) : null;
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
					{renderAddNewCourseButton()}
				</div>
			</div>
			{renderCourses()}
		</div>
	);
}
