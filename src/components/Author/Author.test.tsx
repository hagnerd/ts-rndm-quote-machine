import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Author from './Author';
import { IAuthorProps } from './Author';

const createProps = (props?: any): IAuthorProps => ({
  author: 'Shakespear',
  id: 'test',
  ...props,
});

describe('Author', () => {
  test('should render Author component', () => {
    const props = createProps();
    const authorComp = render(<Author {...props} />);
    expect(authorComp).toBeTruthy();
  });
  test('should render the correct author name', () => {
    const props = createProps({ author: 'Stephen King' });
    const { getByText } = render(<Author {...props} />);
    const authorNode = getByText(props.author);

    expect(authorNode.innerHTML).toMatch(props.author);
  });
  test('should render with the correct id', () => {
    const props = createProps({ id: 'author' });
    const { getByText } = render(<Author {...props} />);
    const authorNode = getByText(props.author);

    expect(authorNode.getAttribute('id')).toEqual('author');
  });
});
