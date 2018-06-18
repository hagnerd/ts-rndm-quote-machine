import * as React from 'react';
import TweetQuote from '../../components/TweetQuote';

const App: React.SFC<{}> = () => (
  <div id="quote-box">
    <div id="text">text</div>
    <div id="author">Author</div>
    <button id="new-quote">New Quote</button>
    <TweetQuote encodedTweetText="cd" />
  </div>
);

export default App;
