import { css } from 'emotion';
import * as React from 'react';

interface IQuoteTextProps {
  text: string;
  id?: string;
}

const quoteStyles = css`
  height: 25%;
  text-align: center;
  margin: 20px 40px;
`;

const QuoteText: React.SFC<IQuoteTextProps> = ({ text, id }) => {
  return (
    <h2 className={quoteStyles} id={id}>
      {text}
    </h2>
  );
};

export default QuoteText;
