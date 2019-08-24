import { css } from 'styled-components';

export const windows = {
  smallPhone: 400,
  phone: 500,
  bigPhone: 620,
  smallTablet: 720,
  tablet: 800,
  smallDesktop: 980,
  hd: 1366,
};

/*
  320,
  480,
  700,
  775,
*/

export default Object.keys(windows).reduce(
  (media, size) => ({
    ...media,
    [size]: (...args) => css`
      @media (max-width: ${windows[size]}px) {
        ${css(...args)};
      }
    `,
  }),
  {}
);
