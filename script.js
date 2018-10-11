import { css } from 'emotion';

const preStyles = css`
  border: 5px solid green;
`;

const mediaStyles = css`
  @media (min-width: 720px) {
    div {
      margin: auto;
    }
  }
`;

const postStyles = css`
  margin-bottom: 32px
`;

const a = document.createElement('div');
a.innerHTML = 'hello';
a.className = `${preStyles} ${mediaStyles} ${postStyles}`;

const container = document.getElementById('container');

container.appendChild(a);
