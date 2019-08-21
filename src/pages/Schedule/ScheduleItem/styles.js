import styled, { css } from 'styled-components';
import { darken } from 'polished';

import Media, { windows } from '~/styles/media';
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

  ul {
    display: flex;
    flex-direction: column;

    margin-left: auto;

    li {
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

    li + li {
      margin-top: 10px;
    }
  }

  ${props =>
    props.left &&
    css`
      @media (min-width: ${windows.smallDesktop}px) {
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

        ul {
          grid-column-start: 1;
          grid-row-start: 1;

          margin: 0 auto 0 0;
        }
      }
    `};

  @media (max-width: ${windows.smallDesktop}px) and (min-width: 621px) {
    grid-template-columns: 0 auto auto;
    margin-bottom: -30px;

    > span {
      margin-right: 90px;
    }

    ul {
      margin-left: 0;
    }
  }

  ${Media.bigPhone`
    grid-template-columns: auto auto auto;
    margin-bottom: -60px;
    margin-top: 100px;

    > span {
      &::before {
        content: none;
      }

      &::after {
        content: none;
      }
    }

    ul {
      display: none;
    }
  `}
`;
