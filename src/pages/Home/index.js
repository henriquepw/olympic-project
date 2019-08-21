import React from 'react';

import logo from '~/assets/logo.svg';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="medalha" />
      <h1>
        <span>Projeto Olímpico</span>
      </h1>
      <h2>Encontrando Talentos em Computação por meio de Olimpíadas</h2>
    </Container>
  );
}
