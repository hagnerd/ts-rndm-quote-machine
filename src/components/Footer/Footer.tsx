import { css } from 'emotion';
import * as React from 'react';
import { madeByProps } from './MadeBy';
import MadeBy from './MadeBy/';
import SocialLinks from './SocialLinks';

const footer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <div className={footer}>
      <MadeBy {...madeByProps} />
      <SocialLinks />
    </div>
  );
}
