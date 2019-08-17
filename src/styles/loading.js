import styled from 'styled-components';

export default styled.div`
  background: #f2f2f2;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    #eeeeee 40%,
    #dddddd 50%,
    #eeeeee 60%
  );
  background-size: 800px 104px;
  background-repeat: no-repeat;
  animation: shimmer 2s infinite linear;

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;
