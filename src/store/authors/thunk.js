import { apiService } from '../../services';
import { ADD_AUTHOR, FETCH_AUTHORS } from './types';

export const addNewAuthorOnServer = (authorCandidate, token) => {
	return async (dispatch, getState) => {
		const author = await apiService.addNewAuthor(authorCandidate, token);
		const authorsList = getState().authorsReducer;
		authorsList.push(author);
		dispatch({ type: ADD_AUTHOR, payload: authorsList });
	};
};

export const fetchAllAuthors = () => {
	return async (dispatch) => {
		try {
			const authors = await apiService.getAllAuthors();
			dispatch({ type: FETCH_AUTHORS, payload: authors });
		} catch (e) {
			console.log(e);
		}
	};
};
