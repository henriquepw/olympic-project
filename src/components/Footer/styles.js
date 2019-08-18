import styled from 'styled-components';

import Media from '~/styles/media';
import { linearGradientColor, secundaryTextColor } from '~/styles/colors';

export const Container = styled.footer`
  width: 100%;
  height: 100px;

  color: ${secundaryTextColor};
  background: ${linearGradientColor};

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 40px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        cursor: default;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;

        img {
          height: 60px;

          &.logo {
            display: none;
          }

          ${Media.bigPhone`
            &.logo {
              display: block;
            }
            &.logotipo {
              display: none;
            }
          `}
        }

        svg:first-child {
          margin-right: 5px;
        }

        svg {
          margin: -13px 0;
        }

        &:hover {
          color: #fff;
        }

        color: ${secundaryTextColor};
      }
    }
  }
`;
