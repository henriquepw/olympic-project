import styled from 'styled-components';

import { linearGradientColor } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: wrap;

  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      user-select: none;

      width: 145px;
      height: 145px;
      background: ${linearGradientColor};

      border-radius: 50%;
      margin: 15px;

      img {
        width: 120px;
        height: 120px;
        position: absolute;

        border-radius: 50%;
        color: transparent;
        cursor: pointer;
        transition: transform 0.2s ease-in;

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transition: 0.2s;
          transform: scale(1.05);
        }
      }
    }

    h4 {
      font-size: 1.1em;
    }
  }
`;
