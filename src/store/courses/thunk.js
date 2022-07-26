import { apiService } from '../../services';
import {
	ADD_NEW_COURSE_TO_STORE,
	DELETE_COURSE,
	FETCH_COURSES,
	UPDATE_COURSE,
} from './types';

export const fetchAllCourses = () => {
	return async (dispatch) => {
		try {
			const courses = await apiService.getAllCourses();
			dispatch({ type: FETCH_COURSES, payload: courses });
		} catch (e) {
			console.log(e);
		}
	};
};

export const createNewCourse = (course, token) => {
	return async (dispatch, getState) => {
		const list = getState().coursesReducer;
		const newCourse = await apiService.postNewCourse(course, token);
		list.push(newCourse);
		dispatch({ type: ADD_NEW_COURSE_TO_STORE, payload: list });
	};
};

export const removeCourse = (id, token) => {
	return async (dispatch, getState) => {
		const result = await apiService.deleteCourseFromServer(id, token);
		if (result.data.successful === true) {
			const list = getState().coursesReducer;
			const filteredList = list.filter((i) => i.id !== id);
			dispatch({ type: DELETE_COURSE, payload: filteredList });
		}
	};
};

export const updateCourseById = (course, courseId, token) => {
	return async (dispatch, getState) => {
		const list = getState().coursesReducer;
		const index = list.findIndex((item) => item.id === courseId);
		list[index] = await apiService.updateExistingCourse(
			course,
			courseId,
			token
		);
		dispatch({ type: UPDATE_COURSE, payload: list });
	};
};
