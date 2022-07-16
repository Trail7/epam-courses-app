import { Navigate, Route, Routes } from 'react-router-dom';

import CreateCourse from './components/CreateCourse/CreateCourse';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses' exact element={<Courses />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
}

export default App;
