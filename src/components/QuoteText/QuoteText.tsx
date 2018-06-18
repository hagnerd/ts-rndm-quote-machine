import * as React from 'react';

interface IQuoteTextProps {
  text: string;
  id?: string;
}

const QuoteText: React.SFC<IQuoteTextProps> = ({ text, id }) => {
  return <div id={id}>{text}</div>;
};

export default QuoteText;
