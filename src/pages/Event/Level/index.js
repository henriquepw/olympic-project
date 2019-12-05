import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Level({ level, description, last }) {
  const { number, name } = level;

  return (
    <Container last={last}>
      <div>
        <h1>Level {number}</h1>
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </Container>
  );
}

Level.propTypes = {
  level: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Level.defaultProps = {
  last: false,
};

export default Level;
