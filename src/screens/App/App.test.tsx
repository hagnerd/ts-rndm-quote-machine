import * as React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', () => {
  test('should render the App component', () => {
    const appComp = render(<App />);
    expect(appComp).toBeTruthy();
  });

  test('should render a sub-component with the id "quote-box"', () => {
    const { container } = render(<App />);
    const quoteBoxId = container.querySelectorAll('#quote-box');

    expect(quoteBoxId.length).toEqual(1);
    expect(quoteBoxId[0].innerHTML).not.toEqual('');
  });

  test('should render a sub-component with the id "text"', () => {
    const { container } = render(<App />);
    const textId = container.querySelectorAll('#text');

    expect(textId.length).toEqual(1);
    expect(textId[0].innerHTML).not.toEqual('');
  });
  test('should render a sub-component with the id "author"', () => {
    const { container } = render(<App />);
    const authorId = container.querySelectorAll('#author');

    expect(authorId.length).toEqual(1);
    expect(authorId[0].innerHTML).not.toEqual('');
  });
  test('should render a sub-component with the id "new-quote"', () => {
    const { container } = render(<App />);
    const newQuoteId = container.querySelectorAll('#new-quote');

    expect(newQuoteId.length).toEqual(1);
    expect(newQuoteId[0].innerHTML).not.toEqual('');
  });
  test('should render a sub-component with the id "tweet-quote"', () => {
    const { container } = render(<App />);
    const tweetQuoteId = container.querySelectorAll('#tweet-quote');

    expect(tweetQuoteId.length).toEqual(1);
  });
});
