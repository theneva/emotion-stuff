import { css, cx } from 'emotion';

const preStyles = css`
  border: 5px solid green;
  margin-left: 100px;
`;

const mediaStyles = css`
  @media (min-width: 720px) {
    margin: 0;
  }
`;

const postStyles = css`
  margin-bottom: 32px
`;

const a = document.createElement('div');
a.innerHTML = 'hello';
a.className = cx(preStyles, mediaStyles, postStyles);
// a.className = `${preStyles} ${mediaStyles} ${postStyles}`;

const container = document.getElementById('container');

container.appendChild(a);
