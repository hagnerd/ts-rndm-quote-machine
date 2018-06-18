import * as React from 'react';

export interface INewQuoteBtnProps {
  id: string;
  onClick: () => void;
}

const NewQuoteBtn: React.SFC<INewQuoteBtnProps> = ({ id, onClick }) => {
  return (
    <button id={id} onClick={onClick}>
      Get New Quote
    </button>
  );
};

export default NewQuoteBtn;
