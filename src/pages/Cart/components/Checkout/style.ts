import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;

  width: 100%;
  height: 100%;
  /* min-height: calc(100vh - 110px); */
  border-radius: 10px;

  background-color: #00091c;

  @media screen and (min-width: 563px) {
    width: 100%;
  }

  @media screen and (max-width: 1096px) {
    flex-direction: column;
    max-height: 860px;
  }

  @media screen and (max-width: 755px) {
    flex-direction: column;
    max-height: 560px;
  }



  .containerResume {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    height: 100%;

    padding-top: 16px;


    @media screen and (max-width: 1096px) {
      /* width: 135vw; */
      min-width: 320px;
    }

    @media screen and (max-width: 755px) {
      width: 100%;
      height: 460px;
    }

    @media screen and (max-width: 560px) {
      padding-top: 5px;
      height: 530px;
    }

    @media screen and (max-width: 350px) {
      width: 280px;
      max-width: 280px;
    }


    .title {
      font-weight: 900;
      font-size: 22px;
      line-height: 22px;
      letter-spacing: 0.1em;
      text-align: center;
      
      width: 92%;
      
      color: #ffffff;
      margin-bottom: 15px;
      /* border-bottom: 3px solid #ffffff; */

      @media screen and (max-width: 1024px) {
        width: 50%;
      }
      
    }
  
    .subtitle {
      font-weight: 900;
      font-size: 22px;
      line-height: 22px;
      letter-spacing: 0.1em;
      text-align: center;
      
      width: 92%;
      
      color: #ffffff;
      border-bottom: 1.5px solid #ffffff;
  
      @media screen and (max-width: 1095px) {
        width: 90%;
        max-width: 590px;
      }
    }
  
    .containerPayments {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      width: 100%;

      margin-top: 30px;
  
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.1em;
      color: #ffffff;
  
      @media screen and (min-width: 563px) {
        padding: 0 10%;
        font-size: 24px;
        line-height: 28px;
      }
  
      @media screen and (min-width: 1024px) {
        padding: 0 10%;
        font-size: 24px;
        line-height: 28px;
        gap: 20px;
      }

      @media screen and (max-width: 1095px) {
        /* border: 1px solid yellow; */
        width: 100%;
        max-width: 608px;
        justify-content: center;
      }

      @media screen and (max-width: 350px) {
        width: 280px;
        max-width: 280px;
        padding: 0;
      }

  
      .checkbox {
        display: flex;
        gap: 11px;
        align-items: center;

        font-size: 16px;
  
        input {
          width: 20px;
          height: 20px;
  
          @media screen and (min-width: 563px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  
`;
