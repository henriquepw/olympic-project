import React from 'react';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di';

import ifpbLogo from '~/assets/ifpb-logo.png';
import ifpbLogoTipo from '~/assets/ifpb-logotipo.png';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <ul>
        <li>
          <a
            href="http://www.ifpb.edu.br/"
            target="_black"
            rel="noopener noreferrer"
          >
            <img
              src={ifpbLogo}
              className="logo"
              alt="IFPB Campus Campina Grande"
            />
            <img
              src={ifpbLogoTipo}
              className="logotipo"
              alt="IFPB Campus Campina Grande"
            />
          </a>
        </li>

        <li>
          <strong>Duvidas?</strong>
          <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
            {process.env.REACT_APP_EMAIL}
          </a>
        </li>

        <li>
          <strong>Código do site</strong>
          <a
            href="https://github.com/henry-ns/olympic-project"
            target="_black"
            rel="noopener noreferrer"
          >
            <DiGithubBadge size={30} />
            <DiGithubFull size={60} />
          </a>
        </li>
      </ul>
    </Container>
  );
}
