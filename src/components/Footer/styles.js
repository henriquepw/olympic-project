import styled from 'styled-components';

import { linearGradientColor, secundaryTextColor } from '~/styles/colors';

export const Container = styled.footer`
  width: 100%;
  height: 100px;

  color: ${secundaryTextColor};
  background: ${linearGradientColor};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 40px;

    img {
      height: 60px;
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: -13px 0;

      svg:first-child {
        margin-right: 5px;
      }

      &:hover {
        color: #fff;
      }

      color: ${secundaryTextColor};
    }
  }
`;
