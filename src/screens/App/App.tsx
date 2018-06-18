import * as React from 'react';
import Author from '../../components/Author';
import NewQuoteBtn from '../../components/NewQuoteBtn';
import Quote from '../../components/QuoteContainer';
import QuoteText from '../../components/QuoteText';
import TweetQuote from '../../components/TweetQuote';

const App: React.SFC<{}> = () => (
  <Quote>
    {({ author, text, handleClick }) => (
      <div id="quote-box">
        <QuoteText text={text} id="text" />
        <Author id="author" author={author} />
        <NewQuoteBtn onClick={handleClick} id="new-quote" />
        <TweetQuote encodedTweetText="cd" id="tweet-quote" />
      </div>
    )}
  </Quote>
);

export default App;
