import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'emotion';
import * as React from 'react';

const link = css`
  background-color: #3094ca;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 20px 10px -10px rgba(0, 0, 0, 0.2);
  }
`;

export interface ITweetQuoteProps {
  encodedTweetText: string;
  id: string;
}

const TweetQuote: React.SFC<ITweetQuoteProps> = ({ encodedTweetText, id }) => {
  return (
    <a
      className={link}
      href={`https://twitter.com/intent/tweet?text=${encodedTweetText}`}
      id={id}
    >
      <FontAwesomeIcon icon={faTwitter} /> Tweet Quote
    </a>
  );
};

export default TweetQuote;
