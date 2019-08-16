import React from 'react';

import ScheduleItem from '~/components/ScheduleItem';

import { cardColors } from '~/styles/colors';
import { Container } from './styles';

const beginner = [
  {
    title: ['Problemas', ' Ad-Hoc simples'],
    subject: ['Condição', 'Repetição', 'Contadores'],
  },
  {
    title: ['Vetores, Matrizes,', 'Strings, busca e', 'ordenação'],
    subject: ['Vetores e Matrizes', 'Strings', 'Busca e ordenação'],
  },
  {
    title: ['Estruturas', 'de dados'],
    subject: ['Pilha', 'Fila', 'Set e Map'],
  },
  {
    title: ['Ad-Hoc', 'intermediários'],
    subject: ['Algoritmos gulosos', 'matemática', '<a definir>'],
  },
  {
    title: ['Backtracking'],
    subject: ['<a definir>', '<a definir>', '<a definir>'],
  },
  {
    title: ['Grafos'],
    subject: ['<a definir>', '<a definir>', '<a definir>'],
  },
];

const advanced = [
  {
    title: ['Problemas', ' Ad-Hoc'],
    subject: ['Condição', 'Repetição', 'Contadores'],
  },
  {
    title: ['Estruturas de', 'dados lineares'],
    subject: ['Pilha, Fila, Lista, etc', 'Ordenação', 'Busca'],
  },
  {
    title: ['Grafos'],
    subject: ['Árvores', 'Algoritmos clássicos', 'Backtracking'],
  },
  {
    title: ['Estruturas de', 'dados não lineares'],
    subject: [
      'Árvores binárias de busca',
      'Fila de prioridade',
      'Segment Tree, BIT e etc',
    ],
  },
  {
    title: ['Matemática'],
    subject: ['Teoria dos números', 'Análise combinatória', 'Teoria dos jogos'],
  },

  {
    title: ['Programação', 'Dinâmica'],
    subject: ['Otimização', 'Top-down', 'Botton-up'],
  },
];

export default function Schedule() {
  return (
    <Container>
      <h1>Iniciante</h1>
      <section>
        {beginner.map((item, index) => (
          <ScheduleItem
            data={item}
            left={index % 2 !== 0}
            color={cardColors[index + 1]}
          />
        ))}
      </section>

      <h1>Avançado</h1>
      <section>
        {advanced.map((item, index) => (
          <ScheduleItem
            data={item}
            left={index % 2 !== 0}
            color={cardColors[index + 1]}
          />
        ))}
      </section>
    </Container>
  );
}
