import * as React from 'react';

const App: React.SFC<{}> = () => (
  <div id="quote-box">
    App
    <div id="text">text</div>
    <div id="author">Author</div>
    <button id="new-quote">New Quote</button>
    <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=">
      Tweet Quote
    </a>
  </div>
);

export default App;
