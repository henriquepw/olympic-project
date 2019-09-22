import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HighlightButton({
  icon,
  link,
  children,
  styles,
  ...rest
}) {
  return (
    <Container
      href={link}
      target="_black"
      rel="noopener noreferrer"
      styles={styles}
      {...rest}
    >
      {icon && icon}
      {children}
    </Container>
  );
}

HighlightButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  styles: PropTypes.func,
};

HighlightButton.defaultProps = {
  icon: undefined,
  styles: undefined,
};
