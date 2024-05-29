import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound Component', () => {
    it('renders without crashing', () => {
        render(<NotFound />);
    });

    // Add more test cases here
});