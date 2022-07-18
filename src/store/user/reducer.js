import { LOGIN, LOGOUT, UPDATE_ROLE } from './types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				isAuth: true,
				name: action.payload.user.name,
				email: action.payload.user.email,
				token: action.payload.result,
			};
		case LOGOUT:
			return {
				...userInitialState,
			};
		case UPDATE_ROLE:
			return {
				...state,
				role: action.payload,
			};
		default:
			return state;
	}
}
