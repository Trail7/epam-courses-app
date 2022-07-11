import { LOGIN, LOGOUT } from './types';

export const login = (data) => {
	return { type: LOGIN, payload: data };
};

export const logout = () => {
	return { type: LOGOUT };
};
