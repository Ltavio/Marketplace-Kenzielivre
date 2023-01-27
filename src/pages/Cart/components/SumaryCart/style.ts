import styled from "styled-components";

export const Sumarystyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  /* min-height: calc(100vh - 110px); */
  border-radius: 10px;

  background-color: #00091c;

  @media screen and (min-width: 563px) {
    width: 100%;
  }

  @media screen and (max-width: 1096px) {
    flex-direction: row;
    max-height: 350px;
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
      width: 135vw;
      min-width: 320px;
    }

    @media screen and (max-width: 755px) {
      width: 100%;
      height: 340px;
    }

    @media screen and (max-width: 560px) {
      height: 310px;
    }


    .containertitle {
      display: flex;
      align-items: center;
      
      width: 92%;
  
      padding: 0 5px 25px 5px;
  
      gap: 10px;
  
      border-bottom: 1.5px solid #ffffff;
  
  
      .title {
        font-weight: 900;
        font-size: 22px;
        line-height: 22px;
        letter-spacing: 0.1em;
        color: #ffffff;
    
        width: 100%;
    
        @media screen and (min-width: 563px) {
          font-size: 22px;
          line-height: 35px;
          width: 92%;
        }
      }
    }
  
  
    .containerSumary {
      display: flex;
      flex-direction: column;
      gap: 27px;
  
      margin: 18px 0 32px 0;
      width: 92%;
      max-height: 200px;
  
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.1em;
      color: #ffffff;
  
      @media screen and (min-width: 563px) {
        font-size: 18px;
        line-height: 30px;
        width: 92%;
      }
  
      @media screen and (max-width: 1096px) {}
  
  
      .values {
        font-size: 17px;
        line-height: 19px;
        font-weight: bold;
  
        @media screen and (min-width: 563px) {
          font-size: 16px;
          line-height: 27px;
        }
      }
  
      .lineSumary {
        display: flex;
        width: 100%;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
  
        font-weight: 400;
        font-size: 15px;
  
        @media screen and (min-width: 563px) {
          width: 100%;
        }
  
        
      }
      .lineSumaryTotal {
        display: flex;
        width: 92%;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        border-top: 1.5px solid #ffffff;
  
        @media screen and (min-width: 563px) {
          width: 100%;
          padding: 11px;
        }

        @media screen and (max-width: 563px) {
          width: 100%;
          padding: 11px;
        }
  
        .totalName {
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
  
          @media screen and (min-width: 563px) {
          }
        }
  
        .totalValue {
          font-size: 19px;
          line-height: 21px;
  
          @media screen and (min-width: 563px) {
            font-size: 19px;
            line-height: 21px;
          }
        }
      }
    }
  }


  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 50px 10% 10px 10%;

    @media screen and (min-width: 1096px) {
      padding: 5% 10% 10px 10%;
    }

    @media screen and (max-width: 1096px) {
      justify-content: center;
      align-items: center;
      padding: 0px 3%;
    }

    @media screen and (max-width: 755px) {
      padding-top: 0px;
    }

  }
`;
