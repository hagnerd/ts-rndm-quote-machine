import { css } from 'emotion';
import * as React from 'react';

const btnStyles = css`
  background-color: #9f83c7;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 20px;
  padding: 10px 20px;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 22px 10px -10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

export interface INewQuoteBtnProps {
  id: string;
  onClick: () => void;
}

const NewQuoteBtn: React.SFC<INewQuoteBtnProps> = ({ id, onClick }) => {
  return (
    <button className={btnStyles} id={id} onClick={onClick}>
      Get New Quote
    </button>
  );
};

export default NewQuoteBtn;
