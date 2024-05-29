import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    it('renders without crashing', () => {
        render(<Home />);
    });

    // Add more test cases here
});