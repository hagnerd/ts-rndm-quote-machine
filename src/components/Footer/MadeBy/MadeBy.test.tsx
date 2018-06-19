import * as React from 'react';
import { render } from 'react-testing-library';
import MadeBy from './MadeBy';

const createProps = (props?: any) => ({
  name: 'Matt Hagner',
  techStack: [{ projectName: 'React', link: 'reactjs.org' }],
});

describe('MadeBy', () => {
  test('should render MadeBy component', () => {
    const props = createProps();
    const madeByComp = render(<MadeBy {...props} />);
    expect(madeByComp).toBeTruthy();
  });
});
