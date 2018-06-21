import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import NewQuoteBtn from './NewQuoteBtn';
import { INewQuoteBtnProps } from './NewQuoteBtn';

const createProps = (props?: any): INewQuoteBtnProps => ({
  id: '',
  onClick: jest.fn(),
  ...props,
});

describe('NewQuoteBtn', () => {
  test('should render NewQuoteBtn component', () => {
    const props = createProps();
    const newQuoteBtnComp = render(<NewQuoteBtn {...props} />);
    expect(newQuoteBtnComp).toBeTruthy();
  });
  test('should render with the proper id', () => {
    const props = createProps({ id: 'new-quote' });
    const { container } = render(<NewQuoteBtn {...props} />);
    const newQuoteId = container.querySelectorAll(`#${props.id}`);

    expect(newQuoteId.length).toEqual(1);
  });
  test('should render with the proper text', () => {
    const props = createProps();
    const { getByText } = render(<NewQuoteBtn {...props} />);
    const newQuoteBtn = getByText(/get new quote/i);

    expect(newQuoteBtn.innerHTML).toMatch(/get new quote/i);
  });
  test('should be able to click button', () => {
    const spy = jest.fn();
    const { getByText } = render(<NewQuoteBtn onClick={spy} id={''} />);
    const newQuoteBtn = getByText(/get new quote/i);

    fireEvent.click(newQuoteBtn);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
