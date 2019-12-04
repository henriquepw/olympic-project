import React from 'react';

import { Container } from './styles';

import Team from './Team';

export default function About() {
  return (
    <Container>
      <p>
        O projeto{' '}
        <strong>
          Encontrando Talentos em Computação por meio de Olimpíadas
        </strong>{' '}
        é um projeto de extensão organizado pelo Instituto Federal de Educação,
        Ciência e Tecnologia da Paraíba, Campus Campina Grande (
        <strong>IFPB-CG</strong>), com o intuito de preparar alunos para
        competições de informática a nível de ensino médio, mais especificamente
        para a Olimpíada Paraibana de Informática (OPI) e para a Olimpíada
        Brasileira de Informática (OBI), partindo do pressuposto de que os
        conteúdos cobrados nessas olimpíadas são de grande relevância na ciência
        da computação e que o ambiente de competição incentiva os participantes
        a evoluírem rapidamente. O projeto possibilita a alunos da rede pública
        um primeiro contato produtivo com a computação, e aos alunos do IFPB o
        desenvolvimento de habilidades básicas e avançadas de programação.
      </p>

      <Team />
    </Container>
  );
}
