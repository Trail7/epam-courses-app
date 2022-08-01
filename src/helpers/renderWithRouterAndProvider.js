import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockedState } from '../testData';

export const renderWithRouterAndProvider = (component) => {
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};
	return render(
		<MemoryRouter>
			<Provider store={mockedStore}>{component}</Provider>
		</MemoryRouter>
	);
};
