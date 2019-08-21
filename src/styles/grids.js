import styled from 'styled-components';

import Media from './media';

export const Box = styled.section`
  width: 100%;
  height: 100%;

  max-width: 980px;
  margin: 0 auto;

  > div {
    margin: 0 30px;
    height: 100%;

    ${Media.bigPhone`
      margin: 0 15px;
    `}
  }
`;
