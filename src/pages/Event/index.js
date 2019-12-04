import React from 'react';

import { Container, Button } from './styles';
import trophy from '~/assets/trophy.svg';

export default function Event() {
  return (
    <Container>
      <h1>Olimpíada de Programação IFPB-CG</h1>
      <p>
        A <strong>Olimpíada de Programação IFPB-CG</strong> é uma competição
        destinada aos alunos do <strong>IFPB</strong> - Campus Campina Grande e
        aos alunos da Escola Estadual Cidadã Integral Técnica de Campina Grande
        Bráulio Maia Júnior (<strong>ECIT</strong>), regularmente matriculados
        em cursos do nível médio ou superior, no ano 2019. A competição é uma
        iniciativa do projeto de extensão “Encontrando Talentos em Computação
        por meio de Olimpíadas”.{' '}
      </p>

      <h2> A Competição</h2>
      <section>
        <img src={trophy} alt="icone de trofel" />
        <div>
          <p>
            A competição será organizada em dois níveis: iniciante e avançado, e
            em uma única fase, com duração de 4 horas, no dia 19 de dezembro de
            2019.
          </p>

          <p>
            O nível <strong>iniciante</strong> destina-se aos alunos
            matriculados no primeiro ano dos cursos técnicos do IFPB-CG, alunos
            da ECIT Bráulio Maia Júnior e alunos do primeiro período de cursos
            superiores do IFPB-CG.
          </p>

          <p>
            O nível <strong>avançado</strong> destina-se aos alunos do IFPB-CG,
            nível médio ou superior, que estejam cursando no mínimo o segundo
            ano ou segundo período de curso técnico ou superior,
            respectivamente.
          </p>
        </div>
      </section>

      <div>
        <Button link="#">Inscreva-se</Button>
      </div>
    </Container>
  );
}
