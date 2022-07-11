import { combineReducers } from 'redux';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import userReducer from './user/reducer';

export default combineReducers({
	coursesReducer,
	authorsReducer,
	userReducer,
});
