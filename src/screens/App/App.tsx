import { css, injectGlobal } from 'emotion';
import * as React from 'react';
import Author from '../../components/Author';
import Footer from '../../components/Footer';
import NewQuoteBtn from '../../components/NewQuoteBtn';
import Quote from '../../components/QuoteContainer';
import QuoteText from '../../components/QuoteText';
import TweetQuote from '../../components/TweetQuote';

export const globalStyles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Taviraj|Work+Sans');

  body
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 1em;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.45;
  }

  h1, h2, h3, h4 {
    font-family: 'Taviraj', serif;
  }


  p {
    margin-bottom: 1.3em;
  }

  h1, h2, h3, h4 {
    font-family: 'Laviraj', serif;
    font-weight: inherit;
    line-height: 1.2;
    margin: 1.414em 0 0.5em;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998em;
  }

  h2 {
    font-size: 2.827em;
  }

  h3 {
    font-size: 1.999em;
  }

  h4 {
    font-size: 1.414em;
  }

  small {
    font-size: 0.707em;
  }
`;

const wrapperDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 80vh;
  width: 70vw; */
`;

const App: React.SFC<{}> = () => (
  <React.Fragment>
    <Quote>
      {({ author, text, handleClick }) => (
        <div id="quote-box" className={wrapperDiv}>
          <div className={flexDiv}>
            <QuoteText text={text} id="text" />
            <Author id="author" author={author} />
            <NewQuoteBtn onClick={handleClick} id="new-quote" />
            <TweetQuote
              encodedTweetText={encodeURIComponent(text)}
              id="tweet-quote"
            />
          </div>
        </div>
      )}
    </Quote>
    <Footer />
  </React.Fragment>
);

export default App;
