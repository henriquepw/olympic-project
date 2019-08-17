import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: default;

    img {
      margin: 0 30px;
      user-select: none;
    }

    span {
      font-size: 4.5rem;
      font-weight: bolder;
      text-align: center;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: normal;
    text-align: center;
  }
`;
