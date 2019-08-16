import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { cardColors } from '~/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 310px auto 310px;

  margin: 80px 0 -80px;

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    grid-column-start: 2;
    text-align: center;

    width: 239px;
    height: 118px;

    margin: auto;
    border-radius: 8px;
    background: ${props => props.color || cardColors[1]};

    font-size: 1.5rem;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;

      width: 5px;
      height: 176px;

      left: calc(100% + 58px);

      background: ${props => darken(0.2, props.color || cardColors[1])};
    }

    &::after {
      content: '';
      position: absolute;

      width: 88px;
      height: 5px;

      left: calc(100% - 25px);

      background: ${props => darken(0.2, props.color || cardColors[1])};
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    margin-left: auto;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.125rem;
      font-weight: bold;

      width: 204px;
      height: 60px;
      padding: auto 20px;
      text-align: center;

      border-radius: 8px;
      background: ${cardColors[0]};
    }

    span + span {
      margin-top: 10px;
    }

    ${props =>
      props.left &&
      css`
        grid-column-start: 1;
        grid-row-start: 1;

        margin: 0 auto 0 0;
      `};
  }

  ${props =>
    props.left &&
    css`
      > span {
        &::before {
          left: auto;
          right: calc(100% + 58px);
        }

        &::after {
          left: auto;
          right: calc(100% - 25px);
        }
      }

      aside {
        grid-column-start: 1;
        grid-row-start: 1;

        margin: 0 auto 0 0;
      }
    `};
`;
