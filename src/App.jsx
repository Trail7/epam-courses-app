import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { v4 as uuidv4 } from 'uuid';

import { mockedCoursesList, mockedAuthorsList } from './constants';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

function App() {
	const [state, setState] = useState(true);
	const [coursesList, updateCoursesList] = useState(mockedCoursesList);
	const [authorsList, updateAuthorsList] = useState(mockedAuthorsList);

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
			<Header />
			{state ? (
				<Courses
					mockedCoursesList={coursesList}
					mockedAuthorsList={authorsList}
					hideCoursesHandler={() => setState(!state)}
				/>
			) : (
				<CreateCourse
					authorsList={authorsList}
					onNewAuthorCreated={handleAuthorsListUpdate}
					onNewCourseCreated={handleCoursesListChange}
					hideCoursesHandler={() => setState(!state)}
				/>
			)}
		</>
	);
}

export default App;
