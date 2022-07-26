import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const { role } = useSelector(getUser);

	return role === 'admin' ? children : <Navigate to='/courses' />;
};
