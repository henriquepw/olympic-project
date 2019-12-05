import styled, { css } from 'styled-components';

import { activeTextColor, primaryLightColor } from '~/styles/colors';
import Media from '~/styles/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 20px;

  h1 {
    font-size: 2.4rem;
    width: 14.5rem;
  }

  h2 {
    font-size: 1.8em;
    color: ${activeTextColor};
    position: relative;
    margin: 20px 30px 0;
    padding-left: 35px;
    padding-bottom: 90px;

    &::before {
      content: '';
      position: absolute;
      background-color: ${primaryLightColor};

      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      border-radius: 3px;
    }

    ${({ last }) =>
      last &&
      css`
        padding-bottom: 0;
      `}
  }

  > p {
    margin-top: 0 !important;
  }

  ${Media.tablet`
    h1 {
      font-size: calc(2.4rem * 0.8);
      width: calc(14.5rem * 0.9);
    }

    h2 {
      font-size: calc(1.8rem * 0.8);
    }
  `}

  ${Media.smallTablet`
    h1 {
      font-size: calc(2.4rem * 0.75);
      width: calc(14.5rem * 0.85);
    }

    h2 {
      font-size: calc(1.8rem * 0.75);
    }

    p {
      font-size: 1rem !important;
    }
  `}
`;
