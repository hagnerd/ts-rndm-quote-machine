import * as React from 'react';

export interface IAuthorProps {
  author: string;
  id?: string;
}

const Author: React.SFC<IAuthorProps> = ({ author, id }) => {
  return <div id={id}>{author}</div>;
};

export default Author;
