import styled from 'styled-components';

import { Box } from '~/styles/grids';

export const Container = styled(Box)`
  margin-top: 100px;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    border-radius: 8px;
    margin: 15px;

    height: 190px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
