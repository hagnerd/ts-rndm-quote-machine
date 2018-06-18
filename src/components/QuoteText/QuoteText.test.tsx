import * as React from 'react';
import { render } from 'react-testing-library';
import QuoteText from './QuoteText';

const createProps = (props?: any) => ({
  text: 'This is a quote',
  ...props,
});

describe('QuoteText', () => {
  test('should render QuoteText component ', () => {
    const props = createProps();
    const quoteTextComp = render(<QuoteText {...props} />);
    expect(quoteTextComp).toBeTruthy();
  });
  test('should render QuoteText with the proper text', () => {
    const props = createProps({ text: 'This is a different quote' });

    const { getByText } = render(<QuoteText {...props} />);
    const quoteText = getByText(props.text);

    expect(quoteText.innerHTML).toEqual(props.text);
  });
  test('should render QuoteText with the proper id', () => {
    const props = createProps({ id: 'text' });
    const { getByText } = render(<QuoteText {...props} />);
    const quoteNode = getByText(props.text);

    expect(quoteNode.getAttribute('id')).toEqual(props.id);
  });
});
