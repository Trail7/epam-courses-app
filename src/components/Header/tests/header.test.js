import { screen } from '@testing-library/react';
import { Header } from '../Header';
import { renderWithRouterAndProvider } from '../../../helpers/renderWithRouterAndProvider';

test("Header should have logo and user's name", () => {
	renderWithRouterAndProvider(<Header />);
	expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
	expect(screen.getByTestId('header-user-name').textContent).toEqual(
		'Test Name'
	);
});
