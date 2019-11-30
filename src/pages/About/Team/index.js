import React from 'react';
import PropTypes from 'prop-types';

import { Container, Section } from './styles';

import alexandre from '~/assets/team/alexandre.jpg';
import franklinaldo from '~/assets/team/franklinaldo.jpg';
import gledson from '~/assets/team/gledson.jpg';
import henrique from '~/assets/team/henrique.jpg';

import ruan from '~/assets/team/ruan.jpeg';
import mirna from '~/assets/team/mirna.jpg';
import ianna from '~/assets/team/ianna.png';

const professors = [
  {
    img: ianna,
    name: 'Ianna Sodré',
    link: 'http://lattes.cnpq.br/8545006395210271',
    role: 'Professora',
  },
  {
    img: ruan,
    name: 'Ruan Gomes',
    link: 'http://lattes.cnpq.br/0944963449027456',
    role: 'Coordenador',
  },
  {
    img: mirna,
    name: 'Mirna Carelli',
    link: 'http://lattes.cnpq.br/2600028670260478',
    role: 'Professora',
  },
];

const trainer = [
  {
    img: alexandre,
    name: 'Alexandre Oliveira',
    link: 'https://github.com/elxande',
    role: 'Instrutor',
  },
  {
    img: franklinaldo,
    name: 'Franklinaldo Junior',
    link: 'https://github.com/RussianFrank',
    role: 'Instrutor',
  },
  {
    img: gledson,
    name: 'Gledson Souza',
    link: 'https://github.com/gledsonS831',
    role: 'Instrutor',
  },
  {
    img: henrique,
    name: 'Henrique Miranda',
    link: 'http://henriquemiranda.netlify.com/',
    role: 'Instrutor',
  },
];

function Person({ name, link, img, role }) {
  return (
    <div>
      <a href={link} target="_black" rel="noopener noreferrer">
        <img src={img} alt={role} />
      </a>
      <h4>{name}</h4>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default function Team() {
  return (
    <Container>
      <h1>Professores</h1>
      <Section>
        {professors.map(person => (
          <Person {...person} key={person.name} />
        ))}
      </Section>

      <h1>Instrutores</h1>
      <Section>
        {trainer.map(person => (
          <Person {...person} key={person.name} />
        ))}
      </Section>
    </Container>
  );
}
