import styled from 'styled-components';
import { activeTextColor } from '~/styles/colors';

import HighlightButton from '~/components/HighlightButton';

export const Container = styled.div`
  min-height: 100%;

  h2 {
    margin-top: 20px;
  }

  h1 {
    font-size: 1.8em;
    text-align: center;
    margin: 30px 0 50px;
  }

  p {
    margin: 1em 0;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  strong {
    color: ${activeTextColor};
  }

  section {
    display: flex;
    align-items: center;
    margin-top: 0px;

    img {
      padding: 0 40px;
      width: 450px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
  }
`;

export const Button = styled(HighlightButton)`
  width: 200px;
  margin: auto;
`;
