import React from 'react';

import books from '~/assets/books.svg';
import calendar from '~/assets/calendar.svg';
import trophy from '~/assets/trophy.svg';
import support from '~/assets/support.png';

import { Container, Item } from './styles';

export default function Call() {
  return (
    <Container>
      <h1>
        {'Seleção para Time Olímpico de Programação do IFPB CG - '}
        <strong>Nível Superior</strong>
      </h1>

      <ul>
        <Item>
          <img src={trophy} alt="icone de trofel" />
          <p>
            Venha <strong>representar</strong> o IFPB e se tornar um programador
            de ponta!
          </p>
        </Item>

        <Item right iconSize={120}>
          <img src={support} alt="icone de trofel" />
          <p>
            O time receberá <strong>suporte</strong> de professores do IFPB e de
            ex alunos premiados
          </p>
        </Item>

        <Item>
          <img src={books} alt="icone de trofel" />
          <p>
            <strong>Encontros semanais</strong> para estudos e resolução de
            problemas
          </p>
        </Item>

        <Item right>
          <img src={calendar} alt="icone de trofel" />
          <p>
            Dedicação semanal mínima de <strong>8 horas</strong> (treinamentos
            presenciais e à distância)
          </p>
        </Item>
      </ul>
    </Container>
  );
}
