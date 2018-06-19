import { css } from 'emotion';
import * as React from 'react';

export interface IAuthorProps {
  author: string;
  id?: string;
}

const authorStyles = css`
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
`;

const Author: React.SFC<IAuthorProps> = ({ author, id }) => {
  return (
    <h3 className={authorStyles} id={id}>
      {author}
    </h3>
  );
};

export default Author;
