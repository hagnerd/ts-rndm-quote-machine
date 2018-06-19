import { css } from 'emotion';
import * as React from 'react';

const links = css`
  border-bottom: 4px solid #764eaf;
  color: #717c85;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #9daab4;
    border-bottom: 4px solid #af97d1;
  }
`;

export const defaultProps = {
  name: 'Matt Hagner',
  techStack: [
    { projectName: 'Typescript', link: 'typescriptlang.org' },
    { projectName: 'React', link: 'reactjs.org' },
    { projectName: 'Emotion', link: 'emotion.sh' },
    {
      link: 'https://github.com/FortAwesome/react-fontawesome',
      projectName: 'Fontawesome',
    },
    { projectName: 'Jest', link: 'https://facebook.github.io/jest/' },
    {
      link: 'https://github.com/kentcdodds/react-testing-library',
      projectName: 'React Testing Library',
    },
  ],
};

type MadeByProps = Readonly<typeof defaultProps>;

interface ITechStack {
  projectName: string;
  link: string;
}

const commaSeparated = (list: ITechStack[]) =>
  list.map(
    (
      v: { projectName: string; link: string },
      i: number,
      arr: Array<{ projectName: string; link: string }>
    ) =>
      i !== arr.length - 1 ? (
        <a className={links} key={v.projectName} href={v.link}>
          {v.projectName},{' '}
        </a>
      ) : (
        <React.Fragment key={v.projectName}>
          and{' '}
          <a className={links} href={v.link}>
            {v.projectName}
          </a>
        </React.Fragment>
      )
  );

export const MadeBy: React.SFC<MadeByProps> = ({
  name = defaultProps.name,
  techStack = defaultProps.techStack,
}) => (
  <div
    className={css`
      text-align: center;
      margin: 20px 30px;
    `}
  >
    <h4>
      Made by <span className={links}>{name}</span>. Made with{' '}
      {commaSeparated(techStack)}.
    </h4>
  </div>
);

export default MadeBy;
