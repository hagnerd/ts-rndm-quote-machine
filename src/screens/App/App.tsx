import * as React from 'react';
import Author from '../../components/Author';
import NewQuoteBtn from '../../components/NewQuoteBtn';
import QuoteText from '../../components/QuoteText';
import TweetQuote from '../../components/TweetQuote';

const dummy = () => null;

const App: React.SFC<{}> = () => (
  <div id="quote-box">
    <QuoteText text="This is a quote" id="text" />
    <Author id="author" author="Dude" />
    <NewQuoteBtn onClick={dummy} id="new-quote" />
    <TweetQuote encodedTweetText="cd" id="tweet-quote" />
  </div>
);

export default App;
