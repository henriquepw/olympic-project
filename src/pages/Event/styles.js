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

  ${Media.smallTablet`
    margin-bottom: 90px !important;
  `}
`;

export const Description = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 40px;

  img {
    padding-right: 40px;
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

  ${Media.bigPhone`
    img {
      position: absolute;
    }

    div {
      p {
        margin-left: 248.563px;
      }
    }
  `}

  ${Media.phone`
    img {
      display: none;
    }

    div {
      p {
        margin-top: 30px;
        margin-left: 0;
      }
    }
  `}
`;

export const Button = styled(HighlightButton)`
  width: 200px;
  margin: auto;
`;
