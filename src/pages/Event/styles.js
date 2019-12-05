import styled from 'styled-components';

import HighlightButton from '~/components/HighlightButton';

import { activeTextColor } from '~/styles/colors';
import Media from '~/styles/media';

export const Container = styled.div`
  min-height: 100%;
  margin: 0 30px 50px !important;

  h3 {
    font-size: 1.6em;
    color: ${activeTextColor};
  }

  p {
    margin: 1em 0;
    font-size: 1.1rem;
    line-height: 2rem;
  }

  strong {
    color: ${activeTextColor};
  }

  section {
    > div {
      margin: 80px 0;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 276px;
  margin-top: 40px;

  img {
    padding: 0 40px;
    height: 100%;
    max-height: 250px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100%;

    h3 {
      margin-top: 10px;
    }
  }

  ${Media.tablet`
    img {
      height: 200px;
    }

    div {
      h3 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `}

  ${Media.smallTablet`
    img {
      height: 180px;
    }

    div {
      h3 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `}
`;

export const Button = styled(HighlightButton)`
  width: 200px;
  margin: auto;
`;
