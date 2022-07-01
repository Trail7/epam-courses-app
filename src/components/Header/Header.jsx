import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON } from '../../constants';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const logout = () => {
		localStorage.removeItem('result');
		localStorage.removeItem('user');
		navigate('/login');
	};
	const user = localStorage.getItem('user');
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
							<span className='pe-4'>{user}</span>
						</div>
						<Button onClick={logout} buttonText={LOGOUT_BUTTON} />
					</div>
				) : null}
			</div>
		</nav>
	);
};
