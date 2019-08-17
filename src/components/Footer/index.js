import React from 'react';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di';

import ifpbLogo from '~/assets/ifpb.svg';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <a
          href="http://www.ifpb.edu.br/"
          target="_black"
          rel="noopener noreferrer"
        >
          <img src={ifpbLogo} alt="IFPB Campus Campina Grande" />
        </a>

        <aside>
          <strong>Contato</strong>
          <strong>{process.env.REACT_APP_EMAIL}</strong>
        </aside>

        <aside>
          <strong>Código do site</strong>
          <a
            href="https://github.com/henry-ns/olympic-project"
            target="_black"
            rel="noopener noreferrer"
          >
            <DiGithubBadge size={30} />
            <DiGithubFull size={60} />
          </a>
        </aside>
      </div>
    </Container>
  );
}
