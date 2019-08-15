import styled from 'styled-components';

import { linearGradientColor, secundaryTextColor } from '~/styles/colors';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100px;
  background: ${linearGradientColor};

  p {
    color: ${secundaryTextColor};
    font-weight: bolder;
  }
`;
