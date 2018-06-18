import * as React from 'react';
import { render } from 'react-testing-library';
import TweetQuote from './TweetQuote';
import { ITweetQuoteProps } from './TweetQuote';

const createProps = (props?: any): ITweetQuoteProps => ({
  encodedTweetText: encodeURIComponent('hey this is a tweet'),
  ...props,
});

describe('TweetQuote', () => {
  test('should render TweetQuote component', () => {
    const props = createProps();
    const tweetQuoteComp = render(<TweetQuote {...props} />);

    expect(tweetQuoteComp).toBeTruthy();
  });

  test('should render an element with the id "tweet-quote" ', () => {
    const props = createProps();
    const { container, getByText } = render(<TweetQuote {...props} />);
    const tweetQuoteId = container.querySelectorAll('#tweet-quote');
    const tweetBtn = getByText(/tweet quote/i);

    expect(tweetQuoteId.length).toEqual(1);
    expect(tweetBtn.innerHTML).toMatch(/tweet quote/i);
    expect(tweetQuoteId[0].getAttribute('href')).toEqual(
      `https://twitter.com/intent/tweet?=${props.encodedTweetText}`
    );
  });
});
