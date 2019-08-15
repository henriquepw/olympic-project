import styled from 'styled-components';

import { primaryColor, secundaryColor, activeTextColor } from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  max-width: 980px;
  margin: 0 auto;

  h1 {
    font-size: 1.625rem;

    background: linear-gradient(${primaryColor}, ${secundaryColor});
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  aside {
    a {
      position: relative;
      margin: 0 15px;
      font-size: 1.25rem;
      transition: all 0.2s;

      &::before {
        position: absolute;
        content: '';

        width: 0%;
        height: 2px;
        border-radius: 1px;

        bottom: -5px;

        background: ${activeTextColor};
        transition: width 0.2s;
      }

      &:hover {
        color: ${activeTextColor};

        &::before {
          width: 100%;
        }
      }
    }
  }
`;
