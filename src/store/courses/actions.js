import { ADD_NEW_COURSE_TO_STORE, DELETE_COURSE, FETCH_COURSES } from './types';
import { getAllCourses } from '../../services';

export const fetchAllCourses = () => {
	return async (dispatch) => {
		try {
			const courses = await getAllCourses();
			dispatch({ type: FETCH_COURSES, payload: courses });
		} catch (e) {
			console.log(e);
		}
	};
};

export const deleteCourse = (list) => {
	return { type: DELETE_COURSE, payload: list };
};

export const addNewCourseToStore = (list) => {
	return { type: ADD_NEW_COURSE_TO_STORE, payload: list };
};
