import styled from 'styled-components';

import { linearGradientColor } from '~/styles/colors';
import { Box } from '~/styles/grids';

export const Container = styled(Box)`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 30px 0 36px;
  }

  p {
    text-align: justify;
    font-size: 1.125rem;

    text-indent: 1.5rem;
    line-height: 1.5rem;
  }

  section {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin-bottom: 80px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-bottom: 20px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 145px;
        height: 145px;
        background: ${linearGradientColor};

        border-radius: 50%;
        margin: 15px;

        img {
          width: 120px;
          height: 120px;

          border-radius: 50%;
          color: transparent;
        }
      }
    }
  }
`;
