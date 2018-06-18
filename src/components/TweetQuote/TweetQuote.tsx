import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface ITweetQuoteProps {
  baseUrl: string;
  encodedTweetText: string;
}

const TweetQuote: React.SFC<ITweetQuoteProps> = ({
  baseUrl,
  encodedTweetText,
}) => {
  return (
    <a href={`${baseUrl}${encodedTweetText}`} id="tweet-quote">
      <FontAwesomeIcon icon={faTwitter} /> Tweet Quotes
    </a>
  );
};

export default TweetQuote;
