import axios from 'axios';

export async function loginUser(credentials) {
	return await axios.post(
		'http://localhost:4000/login',
		{ ...credentials },
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
}

export async function registerUser(newUser) {
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

export async function getAllCourses() {
	const response = await axios.get('http://localhost:4000/courses/all', {
		headers: { accept: '*/*' },
	});
	return await response.data.result;
}

export async function getAllAuthors() {
	const response = await axios.get('http://localhost:4000/authors/all', {
		headers: { accept: '*/*' },
	});
	return await response.data.result;
}
