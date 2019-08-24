import styled from 'styled-components';

import Media from '~/styles/media';
import {
  primaryLightColor,
  secundaryLightColor,
  secundaryTextColor,
  activeTextColor,
} from '~/styles/colors';

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

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 10px;

      height: 50px;
      padding: 20px;
      border-radius: 25px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

      background-size: 200%;
      background-image: linear-gradient(to left, ${primaryLightColor}, ${secundaryLightColor}, ${primaryLightColor});
      color: ${secundaryTextColor};
      font-weight: bold;
      transition: all 0.6s;

      svg {
        margin-right: 10px;
      }

      &:hover {
        box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.5);
        background-position: right;
      }

      &:active {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        transform: translate(2px, 2px);
      }
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

      a {
        transform: scale(0.9);

        &:active {
          transform: scale(0.9) translate(2px, 2px);
        }
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

      a {
        transform: scale(0.9);
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
