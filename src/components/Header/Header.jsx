import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { LOGOUT_BUTTON, USER_NAME } from '../../constants';

export const Header = () => (
	<nav className='navbar'>
		<div className='container border bg-light'>
			<a className='navbar-brand' href='/'>
				<Logo />
			</a>
			<div className='d-flex justify-content-end align-items-center'>
				<div>
					<span className='pe-4'>{USER_NAME}</span>
				</div>
				<Button buttonText={LOGOUT_BUTTON} />
			</div>
		</div>
	</nav>
);
