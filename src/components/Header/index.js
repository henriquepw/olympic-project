import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Projeto Olímpico</h1>
      <aside>
        <Link to="/">Home</Link>
        <Link to="/cronograma">Cronograma</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/sobre">Sobre</Link>
      </aside>
    </Container>
  );
}
