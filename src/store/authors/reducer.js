import { ADD_AUTHOR, FETCH_AUTHORS } from './types';

const authorsInitialState = [];

export default function authorsReducer(state = authorsInitialState, action) {
	switch (action.type) {
		case FETCH_AUTHORS:
			return action.payload;
		case ADD_AUTHOR:
			return [...action.payload];
		default:
			return state;
	}
}
