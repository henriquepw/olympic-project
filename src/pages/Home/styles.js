import styled from 'styled-components';

import Media from '~/styles/media';
import { activeTextColor } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 180px 0 55px;

  > img {
    width: 250px;
    height: 250px;

    margin-bottom: 50px;
    margin-top: -125px;
  }

  h1 span,
  h2 {
    transition: font-size 0.3s;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    white-space: nowrap;
    cursor: default;

    img {
      margin-right: 30px;
      user-select: none;
    }

    span {
      font-size: 4.5rem;
      font-weight: bolder;
      text-align: center;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: normal;
    text-align: center;
  }

  aside {
    display: flex;
    align-items: center;

    margin: 40px 0;

    p {
      margin-right: 10px;
      font-size: 2rem;
      color: ${activeTextColor};
    }
  }

  ${Media.hd`
    > img {
      width: calc(250px * 0.8);
      height: calc(250px * 0.8);

      margin-bottom: calc(50px * 0.8);
      margin-top: calc(-125px * 0.8);
    }

    h1 {
      img {
        height: 64px;
        margin-right: 25px;
      }

      span {
        font-size: calc(4.5rem * 0.8);
      }
    }

    h2 {
      font-size: calc(2.25rem * 0.8);
    }

    aside {
      margin: 30px 0;

      p {
        margin-right: 10px;
        font-size: 1.6rem;
        color: ${activeTextColor};
      }
    }
  `}

  ${Media.smallTablet`
    > img {
      width: calc(250px * 0.6);
      height: calc(250px * 0.6);

      margin-top: calc(-125px * 0.6);
    }

    h1 {
      img {
        height: 44px;
        margin-right: 20px;
      }

      span {
        font-size: calc(4.5rem * 0.6);
      }
    }

    h2 {
      font-size: calc(2.25rem * 0.6);
    }

    aside {
      flex-direction: column;
      margin: 30px 0;

      p {
        margin-bottom: 20px;
        font-size: calc(2.25rem * 0.6);
        color: ${activeTextColor};
        font-weight: bold;
      }
    }
  `}

  ${Media.phone`
    height: calc(100vh - 162px) !important;
    margin-bottom: 80px !important;

    > img {
      margin-top: 0;
      margin-bottom: 30px;
    }

    h1 {
      margin-bottom: 8px;

      img {
        position: absolute;
        filter: blur(2px);

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        height: 40vw;
        opacity: 0.6;
        z-index: -1;
      }

      span {
        font-size: calc(4.5rem * 0.5);
      }
    }

    h2 {
      font-size: calc(2.25rem * 0.5);
    }
  `}
`;
