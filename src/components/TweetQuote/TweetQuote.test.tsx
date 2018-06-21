import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import TweetQuote from './TweetQuote';
import { ITweetQuoteProps } from './TweetQuote';

const createProps = (props?: any): ITweetQuoteProps => ({
  encodedTweetText: encodeURIComponent('hey this is a tweet'),
  id: '',
  ...props,
});

describe('TweetQuote', () => {
  test('should render TweetQuote component', () => {
    const props = createProps();
    const tweetQuoteComp = render(<TweetQuote {...props} />);

    expect(tweetQuoteComp).toBeTruthy();
  });

  test('should render an element with the proper id', () => {
    const props = createProps({ id: 'tweet-quote' });
    const { container } = render(<TweetQuote {...props} />);
    const tweetQuoteId = container.querySelectorAll(`#${props.id}`);

    expect(tweetQuoteId.length).toEqual(1);
  });
  test('should render with the proper text', () => {
    const props = createProps();
    const { getByText } = render(<TweetQuote {...props} />);
    const tweetBtn = getByText(/tweet quote/i);

    expect(tweetBtn.innerHTML).toMatch(/tweet quote/i);
  });
  test('should render with the proper url', () => {
    const props = createProps({
      encodedTweetText: encodeURIComponent('hi there'),
    });
    const { getByText } = render(<TweetQuote {...props} />);
    const tweetBtn = getByText(/tweet quote/i);

    expect(tweetBtn.getAttribute('href')).toEqual(
      `https://twitter.com/intent/tweet?text=${props.encodedTweetText}`
    );
  });
});
