import styled from 'styled-components';

import Media from '~/styles/media';
import { linearGradientColor } from '~/styles/colors';

export const Container = styled.div`
  padding-bottom: 50px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 30px 0 36px;
  }

  p {
    text-align: justify;
    font-size: 1.125rem;

    text-indent: 1.5rem;
    line-height: 1.8rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));

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
          cursor: pointer;
          transition: transform 0.2s ease-in;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }

  ${Media.bigPhone`
    min-height: calc(100vh - 80px) !important;
  `}
`;
