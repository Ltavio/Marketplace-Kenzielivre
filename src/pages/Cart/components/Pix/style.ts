import styled from "styled-components";

export const PixStyled = styled.div`

  @media screen and (min-width: 1024px) {
    padding: 20px 0 50px 0;
  }

  @media screen and (max-width: 1023px) {
    padding: 20px 0 20px 0;
  }

  .buttons {
    width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      
      gap: 20px;
  }
`;
