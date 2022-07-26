import { screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { renderWithRouterAndProvider } from '../../../../../helpers/renderWithRouterAndProvider';
import { mockedState } from '../../../../../testData';

describe('Add tests for CourseCard', () => {
	test('CourseCard should display title', () => {
		renderWithRouterAndProvider(
			<CourseCard course={mockedState.coursesReducer[1]} />
		);
		expect(screen.getByText(/test-title/i)).toBeInTheDocument();
	});
	test('CourseCard should display description', () => {
		renderWithRouterAndProvider(
			<CourseCard course={mockedState.coursesReducer[1]} />
		);
		expect(screen.getByText(/test-description/i)).toBeInTheDocument();
	});
	test('CourseCard should display duration in the correct format', () => {
		renderWithRouterAndProvider(
			<CourseCard course={mockedState.coursesReducer[1]} />
		);
		expect(screen.getByTestId('formatted-course-duration').textContent).toEqual(
			'02:03 hours'
		);
	});
	test('CourseCard should display authors list', () => {
		renderWithRouterAndProvider(
			<CourseCard course={mockedState.coursesReducer[1]} />
		);
		expect(screen.getByTestId('course-card-authors-list').textContent).toEqual(
			'author, author3'
		);
	});
	test('CourseCard should display created date in the correct format.', () => {
		renderWithRouterAndProvider(
			<CourseCard course={mockedState.coursesReducer[0]} />
		);
		expect(
			screen.getByTestId('formatted-course-creation-date').textContent
		).toEqual('03.09.2021');
	});
});
