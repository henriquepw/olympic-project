import React from 'react';

import { randomBytes } from 'crypto';
import ScheduleItem from './ScheduleItem';

import { cardColors } from '~/styles/colors';
import { Container } from './styles';

import data from './data.json';

export default function Schedule() {
  return (
    <Container>
      <span>
        <h1>Iniciante</h1>
        <h2>{process.env.REACT_APP_DATE_BEGINNER}</h2>
      </span>
      <section>
        {data.beginner.map((item, index) => (
          <ScheduleItem
            key={`${item}_${randomBytes(10)}`}
            data={item}
            left={index % 2 !== 0}
            color={cardColors[index + 1]}
          />
        ))}
      </section>

      <span>
        <h1>Avançado</h1>
        <h2>{process.env.REACT_APP_DATE_ADVANCED}</h2>
      </span>
      <section>
        {data.advanced.map((item, index) => (
          <ScheduleItem
            key={`${item}_${randomBytes(10)}`}
            data={item}
            left={index % 2 !== 0}
            color={cardColors[index + 1]}
          />
        ))}
      </section>
    </Container>
  );
}
