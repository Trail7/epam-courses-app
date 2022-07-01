import React, { useState } from 'react';
import {
	EMAIL,
	ENTER_EMAIL,
	ENTER_NAME,
	ENTER_PASSWORD,
	LOGIN,
	LOGIN_LINK_TEXT,
	NAME,
	PASSWORD,
	REGISTRATION,
} from '../../constants';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Registration = () => {
	const navigate = useNavigate();
	const [newUser, setNewUser] = useState({
		name: '',
		password: '',
		email: '',
	});

	function formControl(event) {
		setNewUser({
			...newUser,
			[event.target.id]: event.target.value,
		});
	}

	async function registerUser() {
		return await axios.post(
			'http://localhost:4000/register',
			{ ...newUser },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (newUser.name && newUser.password && newUser.email) {
			registerUser()
				.then((response) => {
					if (response.status === 201) {
						navigate('/login');
					}
				})
				.catch((e) => console.log(e));
		}
	};

	return (
		<div className='mt-4'>
			<h1 className='text-center'>{REGISTRATION}</h1>
			<div className='d-flex justify-content-center'>
				<div className='w-35 p-3'>
					<form onSubmit={onSubmitHandler}>
						<Input
							onChange={(e) => formControl(e)}
							labelText={NAME}
							id='name'
							placeholderText={ENTER_NAME}
						/>
						<Input
							onChange={(e) => formControl(e)}
							labelText={EMAIL}
							id='email'
							placeholderText={ENTER_EMAIL}
						/>
						<Input
							onChange={(e) => formControl(e)}
							labelText={PASSWORD}
							id='password'
							placeholderText={ENTER_PASSWORD}
						/>
						<div className='d-flex justify-content-center mt-4 mb-4'>
							<Button buttonText={REGISTRATION} />
						</div>
					</form>
					<span>{LOGIN_LINK_TEXT}</span>
					<Link to='/login'>{LOGIN}</Link>
				</div>
			</div>
		</div>
	);
};
