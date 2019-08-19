import React from 'react';
import PropTypes from 'prop-types';
import { randomBytes } from 'crypto';

import { Container } from './styles';

export default function ScheduleItem({ data, left, color }) {
  return (
    <Container left={left} color={color}>
      <span>
        {data.title.map(item => (
          <p key={`${item}_${randomBytes(10)}`}>{item}</p>
        ))}
      </span>
      <ul>
        {data.subject.map(item => (
          <li key={`${item}_${randomBytes(10)}`}>{item}</li>
        ))}
      </ul>
    </Container>
  );
}

ScheduleItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.arrayOf(PropTypes.string),
    subject: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  left: PropTypes.bool,
  color: PropTypes.string,
};

ScheduleItem.defaultProps = {
  left: false,
  color: undefined,
};
