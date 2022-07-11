import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON } from '../../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../store';
import { logout } from '../../store/user/actions';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';

export const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const handleLogout = () => {
		localStorage.removeItem('result');
		localStorage.removeItem('user');
		store.dispatch(logout());
		navigate('/login');
	};
	const user = useSelector(getUser);
	const token = localStorage.getItem('result');
	return (
		<nav className='navbar'>
			<div className='container border bg-light'>
				<a className='navbar-brand' href='/'>
					<Logo />
				</a>
				{pathname !== '/login' && pathname !== '/registration' && token ? (
					<div className='d-flex justify-content-end align-items-center'>
						<div>
							<span className='pe-4'>{user.name}</span>
						</div>
						<Button onClick={handleLogout} buttonText={LOGOUT_BUTTON} />
					</div>
				) : null}
			</div>
		</nav>
	);
};
