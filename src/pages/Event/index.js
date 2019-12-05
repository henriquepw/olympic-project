import React from 'react';

import Level from './Level';

import { Container, Description, Button } from './styles';
import dev from '~/assets/dev.svg';

export default function Event() {
  return (
    <Container>
      <section>
        <Description>
          <img src={dev} alt="icone de trofel" />
          <div>
            <h3>A Olimpíada de Programação IFPB-CG</h3>
            <p>
              é uma competição destinada aos alunos do{' '}
              <strong>IFPB - CG</strong> e aos alunos da Escola Estadual Cidadã
              Integral Técnica de Campina Grande Bráulio Maia Júnior (
              <strong>ECIT</strong>). A competição é uma iniciativa do projeto
              de extensão “Encontrando Talentos em Computação por meio de
              Olimpíadas”.
            </p>
          </div>
        </Description>

        <div>
          <Level
            level={{
              number: 1,
              name: 'Iniciante',
            }}
            description="Destina-se aos alunos matriculados no primeiro ano dos cursos técnicos do IFPB-CG, alunos da ECIT Bráulio Maia Júnior e alunos do primeiro período de cursos superiores do IFPB-CG."
          />

          <Level
            last
            level={{
              number: 2,
              name: 'Avançado',
            }}
            description="Destina-se aos alunos do IFPB-CG, nível médio ou superior, que estejam cursando no mínimo o segundo ano ou segundo período de curso técnico ou superior, respectivamente."
          />
        </div>
      </section>
      <Button link="#">Inscreva-se</Button>
    </Container>
  );
}
