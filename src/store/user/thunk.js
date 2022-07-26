import { UPDATE_ROLE } from './types';
import { apiService } from '../../services';

export const getUsersRole = (token) => {
	return async (dispatch) => {
		const role = await apiService.getRole(token);
		dispatch({ type: UPDATE_ROLE, payload: role });
	};
};
