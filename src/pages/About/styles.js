import styled from 'styled-components';

import Media from '~/styles/media';
import { activeTextColor } from '~/styles/colors';

export const Container = styled.div`
  padding: 50px 0;

  h1,
  h4 {
    cursor: default;
  }

  h1 {
    display: inline-block;
    position: relative;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin: 50px auto 36px;

    &::after {
      content: '';
      position: absolute;
      background-color: ${activeTextColor};
      border-radius: 1px;

      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
    }
  }

  section + h1 {
    margin-top: 0;
  }

  p {
    font-size: 1.125rem;
    text-indent: 1.5rem;
    line-height: 1.8rem;

    strong {
      color: ${activeTextColor};
    }
  }

  ${Media.bigPhone`
    min-height: calc(100vh - 80px) !important;
  `}
`;
