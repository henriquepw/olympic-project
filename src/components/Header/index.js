import React, { useState } from 'react';

import { Container, Button } from './styles';

const VALUES = [
  ['/', 'Home'],
  ['/cronograma', 'Cronograma'],
  ['/galeria', 'Galeria'],
  ['/sobre', 'Sobre'],
];

export default function Header() {
  const [page, setPage] = useState(window.location.pathname);

  return (
    <Container>
      <h1>Projeto Olímpico</h1>
      <aside>
        {VALUES.map(route => (
          <Button
            key={route[0]}
            to={route[0]}
            onClick={() => setPage(route[0])}
            selected={page === route[0]}
          >
            {route[1]}
          </Button>
        ))}
      </aside>
    </Container>
  );
}
