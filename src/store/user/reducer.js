import { LOGIN, LOGOUT } from './types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
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
		default:
			return state;
	}
}
