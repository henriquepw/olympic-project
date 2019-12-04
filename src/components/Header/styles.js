import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Media from '~/styles/media';
import {
  primaryColor,
  secundaryColor,
  activeTextColor,
  primaryTextColor,
  backgroundColor,
  secundaryTextColor,
} from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  max-width: 1020px;
  margin: 0 auto;

  h1 {
    font-size: 1.65rem;
    user-select: none;
    margin-left: 30px;

    background: linear-gradient(${primaryColor}, ${secundaryColor});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    transition: transform 0.2s;
    z-index: 2;

    &:active {
      transform: scale(0.95);
    }
  }

  svg {
    display: none;
    cursor: pointer;
    user-select: none;
    margin-right: 30px;
    transition: color 0.2s;

    z-index: 2;
  }

  ${Media.tablet`
    svg {
      display: block;
      color: ${props => (props.opened ? activeTextColor : primaryTextColor)};

      &:hover {
        color: ${activeTextColor};
      }
    }
  `}

  ${Media.phone`
    h1 {
      margin-left: 15px;
    }

    svg {
      margin-right: 15px;
    }
  `}
`;

export const Menu = styled.ul`
  margin-right: 15px;

  ${Media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    top: 0;
    left: 100%;

    width: 100%;
    height: 100vh;

    position: fixed;
    transition: transform 1s ease-in-out;

    background: #fff;
    z-index: 1;

    ${props =>
      props.opened &&
      css`
        transform: translateX(-100%);
      `}
  `}
`;

export const Button = styled(Link)`
  position: relative;
  margin-left: 45px;
  font-size: 1.25rem;
  transition: 0.2s;

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

  ${props =>
    props.selected &&
    css`
      color: ${activeTextColor};
      font-weight: bolder;
    `}

  ${props =>
    props.hightlight &&
    css`
      padding: 8px 20px;
      border: 2px solid ${activeTextColor};
      border-radius: 24px;

      &:hover {
        background: ${activeTextColor};
        color: ${secundaryTextColor};

        &::before {
          width: 0%;
        }
      }
    `}

  ${Media.tablet`
    font-size: 2rem;
    margin: 10px auto;
  `}
`;
