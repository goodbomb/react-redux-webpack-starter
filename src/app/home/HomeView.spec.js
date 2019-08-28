import React from 'react';
import { render } from '@testing-library/react';
import HomeView from './HomeView';

describe('HomeView', () => {
    it('should display the message "I\'m the home page!"', () => {
        const { getByTestId } = render(<HomeView />);
        const element = getByTestId('home-view');

        expect(element.innerHTML).toBe('I\'m the home page!');
    });
});
