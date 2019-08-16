import React from 'react';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p>Contato</p>
      <p>{process.env.REACT_APP_EMAIL}</p>
    </Container>
  );
}
