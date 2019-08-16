import styled from 'styled-components';

import { Box } from '~/styles/grids';
import { backgroundColor, primaryTextColor } from '~/styles/colors';

export const Container = styled(Box)`
  position: relative;
  padding-bottom: 180px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: 70px;

    background: ${primaryTextColor};
    color: ${backgroundColor};

    font-size: 2.25rem;
    border-radius: 8px;
    margin: 80px auto;
  }

  section + h1 {
    margin-top: 170px;
  }

  section {
    position: relative;

    &::before {
      content: '';
      position: absolute;

      width: 20px;
      height: 20px;
      border: 5px solid ${primaryTextColor};
      border-radius: 50%;

      top: -30px;
      left: calc(50% - 15px);

      background: ${backgroundColor};
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;

      width: 5px;
      height: calc(100% + 30px);
      border-radius: 2.5px;

      top: -30px;
      left: calc(50% - 2.5px);

      background: ${primaryTextColor};
      z-index: -2;
    }
  }
`;
