import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { v4 as uuidv4 } from 'uuid';

import { mockedCoursesList, mockedAuthorsList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';

function App() {
	const [coursesList, updateCoursesList] = useState(mockedCoursesList);
	const [authorsList, updateAuthorsList] = useState(mockedAuthorsList);
	const [user, setUser] = useState('');

	function handleCoursesListChange(newCourse) {
		const list = coursesList.concat();
		list.push(newCourse);
		updateCoursesList(list);
	}

	function handleAuthorsListUpdate(newAuthor) {
		const list = [...authorsList];
		const author = {
			id: uuidv4(),
			name: newAuthor,
		};
		list.push(author);
		updateAuthorsList(list);
	}

	return (
		<>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login setUser={setUser} />} />
				<Route
					path='/courses'
					exact
					element={
						<Courses
							mockedCoursesList={coursesList}
							mockedAuthorsList={authorsList}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<CreateCourse
							authorsList={authorsList}
							onNewAuthorCreated={handleAuthorsListUpdate}
							onNewCourseCreated={handleCoursesListChange}
						/>
					}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
}

export default App;
