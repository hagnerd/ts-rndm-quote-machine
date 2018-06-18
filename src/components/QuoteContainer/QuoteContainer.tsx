import * as React from 'react';
import quotesApi from '../../fakeApi/quotesapi';
import randomNumber from '../../utils/randomNumber';

const initialState = {
  currentQuote: quotesApi[randomNumber(quotesApi.length)],
};

type QuoteProps = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

type QuoteState = Readonly<typeof initialState>;

type RenderCallback = (args: IRenderProps) => JSX.Element;

interface IRenderProps {
  author: QuoteState['currentQuote']['author'];
  text: QuoteState['currentQuote']['text'];
  handleClick: Quote['handleClick'];
}

export default class Quote extends React.Component<QuoteProps, QuoteState> {
  public state: QuoteState = initialState;

  public render() {
    const { handleClick } = this;
    const { children, render } = this.props;
    const {
      currentQuote: { author, text },
    } = this.state;

    return render
      ? render({ author, text, handleClick })
      : children
        ? children({ author, text, handleClick })
        : null;
  }

  private handleClick = () =>
    this.setState({
      currentQuote: quotesApi[randomNumber(quotesApi.length)],
    });
}
