import * as React from 'react';
import NewQuoteBtn from '../../components/NewQuoteBtn';
import TweetQuote from '../../components/TweetQuote';

const dummy = () => null;

const App: React.SFC<{}> = () => (
  <div id="quote-box">
    <div id="text">text</div>
    <div id="author">Author</div>
    {/* <button id="new-quote">New Quote</button> */}
    <NewQuoteBtn onClick={dummy} id="new-quote" />
    <TweetQuote encodedTweetText="cd" id="tweet-quote" />
  </div>
);

export default App;
