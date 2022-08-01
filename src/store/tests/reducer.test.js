import coursesReducer from '../courses/reducer';
import { ADD_NEW_COURSE_TO_STORE } from '../courses/types';

describe('Add tests for coursesReducer', () => {
	test('reducer should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual([]);
	});

	test('reducer should handle SAVE_COURSE and returns new state', () => {
		let state = [];
		const payload = [
			{
				title: 'test-title',
				description: 'test-description',
				duration: 234,
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
					'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
				],
				creationDate: '26/07/2022',
				id: '264d20c6-f257-426d-a680-13afef1b0393',
			},
		];
		expect(
			coursesReducer(state, { type: ADD_NEW_COURSE_TO_STORE, payload })
		).toEqual(payload);
	});
});
