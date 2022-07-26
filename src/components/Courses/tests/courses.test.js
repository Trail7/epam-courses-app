import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../Courses';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndProvider } from '../../../helpers/renderWithRouterAndProvider';
import { mockedState } from '../../../testData';

test('Courses should display amount of CourseCard equal length of courses array', () => {
	renderWithRouterAndProvider(<Courses />);
	expect(screen.getAllByTestId('formatted-course-duration').length).toBe(
		mockedState.coursesReducer.length
	);
});

test('CourseForm should be shown after a click on the "Add new course" button', async () => {
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		</BrowserRouter>
	);
	await userEvent.click(screen.getByTestId('add-new-course-button'));
	// eslint-disable-next-line no-restricted-globals
	expect(location.pathname).toBe('/courses/add');
});
