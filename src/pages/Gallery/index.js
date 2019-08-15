import React from 'react';

import meeting from '~/assets/reuniao01.png';

import { Container, Photos } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  return (
    <Container>
      <Photos>
        {data.map(item => (
          <img src={meeting} alt="reunião de planegamento" />
        ))}
      </Photos>
    </Container>
  );
}
