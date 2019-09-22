import styled, { css } from 'styled-components';

import HighlightButton from '~/components/HighlightButton';

import Media from '~/styles/media';
import { activeTextColor } from '~/styles/colors';

export const Container = styled.div`
  h1 {
    font-size: 2.25rem;
    text-align: center;

    width: 80%;
    margin: 70px auto;
  }

  strong {
    color: ${activeTextColor};
  }

  ul {
    padding: 30px 0 150px;

    li + li {
      padding-top: 70px;
    }
  }

  ${Media.hd`
    h1 {
      font-size: calc(2.25rem * 0.9);
    }
  `}

  ${Media.tablet`
    h1 {
      font-size: calc(2.25rem * 0.8);
    }
  `}

  ${Media.bigPhone`
    h1 {
      font-size: calc(2.25rem * 0.6);
    }
  `}
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  width: 90%;
  margin: auto;

  img {
    height: ${({ iconSize }) => iconSize || 100}px;
    width: ${({ iconSize }) => iconSize || 100}px;
  }

  p {
    font-size: 1.7rem;
    margin: auto 0;

    margin-left: 40px;

    ${({ right }) =>
      right &&
      css`
        grid-column-start: 1;
        grid-row-start: 1;

        margin-left: 0px;
        margin-right: 40px;

        text-align: right;
      `}
  }

  ${Media.hd`
    p {
      font-size: calc(1.7rem * 0.9);
    }
  `}

  ${Media.tablet`
    p {
      font-size: calc(1.7rem * 0.8);
    }

    img {
      transform: scale(0.8);
    }
  `}

  ${Media.bigPhone`
    p {
      font-size: calc(1.7rem * 0.6);
    }
  `}
`;

export const Button = styled(HighlightButton)`
  max-width: 180px;
  margin: auto;
  margin-top: 100px;

  letter-spacing: 2px;
`;
