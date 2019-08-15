import { createGlobalStyle } from 'styled-components';

import { backgroundColor, primaryTextColor } from './colors';

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

    font: 16px Raleway, sans-serif;
    color: ${primaryTextColor};
  }

  body {
    background: ${backgroundColor};
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;
    color: ${primaryTextColor};
  }

  ul {
    list-style: none;
  }
`;
