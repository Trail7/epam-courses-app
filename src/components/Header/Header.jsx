import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON } from '../../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../store';
import { logout } from '../../store/user/actions';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import { apiService } from '../../services';

export const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(getUser);
	const { pathname } = useLocation() || 'test';

	const handleLogout = () => {
		apiService
			.logout(user.token)
			.then(() => console.log('user was logged out'));
		localStorage.clear();
		store.dispatch(logout());
		navigate('/login');
	};

	const AuthToken = localStorage.getItem('result') || user.token;
	return (
		<nav className='navbar'>
			<div className='container border bg-light'>
				<a className='navbar-brand' href='/'>
					<Logo />
				</a>
				{pathname !== '/login' && pathname !== '/registration' && AuthToken ? (
					<div className='d-flex justify-content-end align-items-center'>
						<div>
							<span className='pe-4' data-testid='header-user-name'>
								{user.name}
							</span>
						</div>
						<Button onClick={handleLogout} buttonText={LOGOUT_BUTTON} />
					</div>
				) : null}
			</div>
		</nav>
	);
};
