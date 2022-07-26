import axios from 'axios';

class ApiService {
	constructor(base_url) {
		this.api = axios.create({
			baseURL: base_url,
		});
	}

	async getRole(token) {
		try {
			const response = await this.api.get('/users/me', {
				headers: { accept: '*/*', Authorization: token },
			});
			return await response.data.result.role;
		} catch (e) {
			console.log(e);
		}
	}

	async loginUser(credentials) {
		return await this.api.post(
			'/login',
			{ ...credentials },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}

	async registerUser(newUser) {
		return await this.api.post(
			'/register',
			{ ...newUser },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}

	async getAllCourses() {
		const response = await this.api.get('/courses/all', {
			headers: { accept: '*/*' },
		});
		return await response.data.result;
	}

	async postNewCourse(newCourse, token) {
		// const authToken = localStorage.getItem('result');
		const response = await this.api.post(
			'/courses/add',
			{ ...newCourse },
			{
				headers: { accept: '*/*', Authorization: token },
			}
		);
		return await response.data.result;
	}

	async updateExistingCourse(course, courseId, token) {
		const response = await this.api.put(
			`/courses/${courseId}`,
			{ ...course },
			{
				headers: { accept: '*/*', Authorization: token },
			}
		);
		return await response.data.result;
	}

	async deleteCourseFromServer(id, token) {
		return await this.api.delete(`/courses/${id}`, {
			headers: { accept: '*/*', Authorization: token },
		});
	}

	async getAllAuthors() {
		const response = await this.api.get('/authors/all', {
			headers: { accept: '*/*' },
		});
		return await response.data.result;
	}

	async addNewAuthor(newAuthor, token) {
		const response = await this.api.post(
			'/authors/add',
			{
				...newAuthor,
			},
			{
				headers: { accept: '*/*', Authorization: token },
			}
		);
		return await response.data.result;
	}

	logout(token) {
		try {
			return this.api.delete('/logout', {
				headers: { accept: '*/*', Authorization: token },
			});
		} catch (e) {
			console.log(e);
		}
	}
}

export const apiService = new ApiService('http://localhost:4000/');
