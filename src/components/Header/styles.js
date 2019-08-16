import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColor, secundaryColor, activeTextColor } from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  max-width: 980px;
  margin: 0 auto;

  h1 {
    font-size: 1.65rem;
    user-select: none;
    margin-left: 15px;

    background: linear-gradient(${primaryColor}, ${secundaryColor});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const Button = styled(Link)`
  position: relative;
  margin: 0 15px;
  font-size: 1.25rem;
  transition: color 0.2s;

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
`;
