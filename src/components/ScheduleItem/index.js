import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ScheduleItem({ data, left, color }) {
  return (
    <Container left={left} color={color}>
      <span>
        {data.title.map(item => (
          <p key={item}>{item}</p>
        ))}
      </span>
      <aside>
        {data.subject.map(item => (
          <span key={item}>{item}</span>
        ))}
      </aside>
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
