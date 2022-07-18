import {
	ADD_NEW_COURSE_TO_STORE,
	DELETE_COURSE,
	FETCH_COURSES,
	UPDATE_COURSE,
} from './types';

const initialState = [];

export default function coursesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_COURSES:
			return action.payload;
		case DELETE_COURSE:
			return action.payload;
		case ADD_NEW_COURSE_TO_STORE:
			return action.payload;
		case UPDATE_COURSE:
			return action.payload;
		default:
			return state;
	}
}
