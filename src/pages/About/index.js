import React from 'react';

import { randomBytes } from 'crypto';
import { Container } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function About() {
  return (
    <Container>
      <h2>Resumo</h2>
      <p>
        Este projeto visa preparar alunos para competições de informática a
        nível de ensino médio, mais especificamente para a Olimpíada Paraibana
        de Informática (OPI) e para a Olimpíada Brasileira de Informática (OBI),
        partindo do pressuposto de que os conteúdos cobrados nessas olimpíadas
        são de grande relevância na ciência da computação e o ambiente de
        competição incentiva os participantes a evoluírem rapidamente. Assim,
        dá-se a oportunidade a alunos da rede pública de ter um primeiro contato
        produtivo com a computação.
      </p>

      {/* <h2>Equipe</h2>
      <section>
        {data.map(item => (
          <div>
            <span>
              <img
                key={`${item}_${randomBytes(5)}`}
                src={`https://api.adorable.io/avatars/285/adorable${item}.png`}
                alt={`adorable${item}`}
              />
            </span>
            <h4>Nome Sobrenome</h4>
          </div>
        ))}
      </section> */}
    </Container>
  );
}
