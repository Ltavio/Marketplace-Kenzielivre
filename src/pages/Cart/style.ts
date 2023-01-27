import styled from "styled-components";

export const CartStyled = styled.div`
  /* background-color: #1c1b23; */

  width: 100vw;
  max-width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: rgba(63,61,86,85%);

  * {
    ::-webkit-scrollbar{
        width:10px;
        background-color: white;
    }
    ::-webkit-scrollbar-thumb{
        width:10px;
        border-radius: 4px;
        background-color:rgba(63,61,86, 85%);
    }

  }


  @media screen and (max-width: 1096px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

  }

  .mainCart {
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 110px);

    display: flex;
    align-items: center;
    padding-top: 24px;

    @media screen and (max-width: 1096px) {
      width: 85%;
      
    }

    @media screen and (max-width: 380px) {
      width: 92%;
    }


    
    .containerBox {
      width: 30%;
      height: 520px;

      margin-right: 2%;
      border-radius: 10px;

      @media screen and (min-width: 1096px) {
        position: fixed;

        top: 130px;
        right: 0.1vw;
      }
      

      @media screen and (max-width: 1096px) {
        position: inherit;

        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 100%;
        
        max-height: 350px;

      }

      @media screen and (max-width: 755px) {
        max-height: 560px;
        margin-bottom: 20px;
      }
      
    }
  }
`;
