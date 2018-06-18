import * as React from 'react';
import { render } from 'react-testing-library';
import Quote from './QuoteContainer';

describe('Quote', () => {
  test('should render the Quote component', () => {
    const quoteContainer = render(<Quote />);
    expect(quoteContainer).toBeTruthy();
  });
});
