import React, { useEffect, useState } from 'react';
import {
	EMAIL,
	ENTER_EMAIL,
	ENTER_PASSWORD,
	LOGIN,
	PASSWORD,
	REGISTER,
	REGISTRATION_LINK_TEXT,
} from '../../constants';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/user/actions';
import store from '../../store';
import { apiService } from '../../services';
import { getUsersRole } from '../../store/user/thunk';

export const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!!localStorage.getItem('result')) navigate('/courses');
		// eslint-disable-next-line
	}, []);

	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	function formControl(event) {
		setCredentials({
			...credentials,
			[event.target.id]: event.target.value,
		});
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		if (credentials.email && credentials.password) {
			await apiService
				.loginUser(credentials)
				.then((response) => {
					if (response.status === 201) {
						localStorage.setItem('result', response.data.result);
						store.dispatch(login(response.data));
						store.dispatch(getUsersRole(response.data.result));
					}
				})
				.then(() => navigate('/courses'))
				.catch((e) => console.log(e));
		}
	};

	return (
		<div className='mt-4'>
			<h1 className='text-center'>{LOGIN}</h1>
			<div className='d-flex justify-content-center'>
				<div className='w-35 p-3'>
					<form onSubmit={onSubmitHandler}>
						<Input
							type='email'
							onChange={(e) => formControl(e)}
							labelText={EMAIL}
							id='email'
							placeholderText={ENTER_EMAIL}
						/>
						<Input
							onChange={(e) => formControl(e)}
							labelText={PASSWORD}
							id='password'
							type='password'
							placeholderText={ENTER_PASSWORD}
						/>
						<div className='d-flex justify-content-center mt-4 mb-4'>
							<Button buttonText={LOGIN} />
						</div>
					</form>
					<span>{REGISTRATION_LINK_TEXT}</span>
					<Link to='/registration'>{REGISTER}</Link>
				</div>
			</div>
		</div>
	);
};
