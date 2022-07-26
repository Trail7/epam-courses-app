import { ADD_AUTHOR } from './types';

export const addNewAuthor = (list) => {
	return { type: ADD_AUTHOR, payload: list };
};
