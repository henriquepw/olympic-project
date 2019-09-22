import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { Container, Menu, Button } from './styles';

const VALUES = [
  ['/', 'Home'],
  ['/selecao', 'Seleção'],
  ['/cronograma', 'Cronograma'],
  // ['/galeria', 'Galeria'],
  ['/sobre', 'Sobre'],
];

export default function Header() {
  const [page, setPage] = useState(window.location.pathname);
  const [opened, setOpened] = useState(false);

  function handleClick(route) {
    setPage(route);
    setOpened(false);
  }

  return (
    <Container opened={opened}>
      <h1>
        <Link to="/" onClick={() => handleClick('/')}>
          Projeto Olímpico
        </Link>
      </h1>
      <Menu opened={opened}>
        {VALUES.map(route => (
          <Button
            key={route[0]}
            to={route[0]}
            hightlight={route[0] === '/selecao' && page !== route[0]}
            selected={page === route[0]}
            onClick={() => handleClick(route[0])}
          >
            {route[1]}
          </Button>
        ))}
      </Menu>
      <FiMenu size={35} onClick={() => setOpened(!opened)} />
    </Container>
  );
}
