import { ADD_AUTHOR, FETCH_AUTHORS } from './types';
import { getAllAuthors } from '../../services';

export const fetchAllAuthors = () => {
	return async (dispatch) => {
		try {
			const authors = await getAllAuthors();
			dispatch({ type: FETCH_AUTHORS, payload: authors });
		} catch (e) {
			console.log(e);
		}
	};
};

export const addNewAuthor = (list) => {
	return { type: ADD_AUTHOR, payload: list };
};
