import { createGlobalStyle } from 'styled-components';

import { backgroundColor } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;

    &:hover {
      outline: 0;
    }
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    font: 14px Raleway, sans-serif;
  }

  body {
    background: ${backgroundColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
