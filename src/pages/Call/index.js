import React from 'react';

import books from '~/assets/books.svg';
import calendar from '~/assets/calendar.svg';
import trophy from '~/assets/trophy.svg';
import support from '~/assets/support.png';
import list from '~/assets/list.svg';

import { Container, Item, Button } from './styles';

export default function Call() {
  return (
    <Container>
      <h1>
        {'Seleção para Time Olímpico de Programação do IFPB CG - '}
        <strong>Nível Superior</strong>
        <br />
        Prova dia 02 de outubro
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
          <img src={support} alt="icone de suporte" />
          <p>
            O time receberá <strong>suporte</strong> de professores do IFPB e de
            ex alunos premiados
          </p>
        </Item>

        <Item>
          <img src={books} alt="icone de livros" />
          <p>
            <strong>Encontros semanais</strong> para estudos e resolução de
            problemas
          </p>
        </Item>

        <Item right>
          <img src={calendar} alt="icone de calendário" />
          <p>
            Dedicação semanal mínima de <strong>8 horas</strong> (treinamentos
            presenciais e à distância)
          </p>
        </Item>

        <Item>
          <img src={list} alt="icone de listas" />
          <p>
            <strong>Assuntos da prova: </strong>ad-hoc, strings, estruturas de
            dados e grafos
          </p>
        </Item>

        <Button link="https://forms.gle/3khRQn6iKCdp8Bur9">INSCREVER</Button>
      </ul>
    </Container>
  );
}
