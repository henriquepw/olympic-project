import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

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

      <aside>
        <p>Ficou interessado?</p>
        <a
          href={process.env.REACT_APP_GROUP}
          target="_black"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp size={25} />
          Entrar no grupo
        </a>
      </aside>
    </Container>
  );
}
