import React from 'react';

import medal from '~/assets/medal.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        <img src={medal} alt="medalha" />
        <span>Projeto Olímpico</span>
      </h1>
      <h2>Encontrando Talentos em Computação por meio de Olimpíadas</h2>
    </Container>
  );
}
