import {
  faGithub,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'emotion';
import * as React from 'react';

const links = css`
  color: #764eaf;
  margin: 0px 20px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #af97d1;
  }
`;

const footer = css`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLinks = () => (
  <nav className={footer}>
    <a className={links} href="https://github.com/hagnerd">
      <FontAwesomeIcon icon={faGithub} size="3x" />
    </a>
    <a className={links} href="https://twitter.com/mattinthecouch">
      <FontAwesomeIcon icon={faTwitter} size="3x" />
    </a>
    <a className={links} href="https://medium.com/@hagnerd">
      <FontAwesomeIcon icon={faMedium} size="3x" />
    </a>
  </nav>
);

export default SocialLinks;
