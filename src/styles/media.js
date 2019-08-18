import { css } from 'styled-components';

export const windows = {
  smallPhone: 320,
  phone: 480,
  bigPhone: 700,
  tablet: 800,
  smallDesktop: 980,
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
