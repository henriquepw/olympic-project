import styled from 'styled-components';

import {
  primaryLightColor,
  secundaryLightColor,
  secundaryTextColor,
} from '~/styles/colors';
import Media from '~/styles/media';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.1rem;

  cursor: pointer;
  user-select: none;

  margin: 0 10px;

  height: 50px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

  background-size: 200%;
  background-image: linear-gradient(
    to left,
    ${primaryLightColor},
    ${secundaryLightColor},
    ${primaryLightColor}
  );
  color: ${secundaryTextColor};
  font-weight: bold;
  transition: all 0.3s;

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

  ${Media.hd`
    transform: scale(0.9) translate(2px, 2px);

    &:active {
      transform: scale(0.9) translate(4px, 4px);
    }
  `}
`;
