import styled from "styled-components";
import { Link } from "react-router-dom"

export const CardDescription = styled(Link)`
    transition: 100ms;
    text-decoration: none;
    

    :hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 700px) {
      text-overflow: ellipsis;
      max-width: 180px;
      overflow: hidden;
      white-space: nowrap;
    }

    @media(max-width:350px){
      text-overflow: ellipsis;
      max-width: 140px;
      max-height: 63px;
      overflow: hidden;
      white-space: pre-wrap;
    }

`
export const CardImg = styled(Link)`
    transition: 100ms;
    text-decoration: none;
`

export const ProductCartStyled = styled.ul`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  padding: 10px;

  width: 100%;
  min-width: 300px;
  height: 100%;

  min-height: calc(100vh - 110px);
  max-height: calc(100vh - 110px);

  overflow: hidden scroll;

  @media(min-width:1096px){
    padding: 20px 35% 20px 20px;
  }

  @media(max-width:670px){
    max-height: 250vh;
    overflow: hidden;
  }


  @media(max-width:580px){
    max-height: 450vh;
    overflow: hidden;

    /* border: 1px solid yellow; */
  }

  @media(max-width:350px){
    padding: 0;
  }



  .product {
    box-sizing:border-box;

    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;

    width: 95%;
    max-width: 989px;

    height: 16vh;
    min-height: 127.99px;
    max-height: 128px;

    border-radius: 5px;
    background-color: #ffff;

    @media(max-width:670px){
      width: 100%;
      max-width: 100%;
      padding: 20px 0;
    }


    @media screen and (max-width: 580px) {
      flex-direction: column;
      height: 220px;
      max-height: 220px;
      /* border: 1px solid blue; */
    }

    .productDetail{
      display: flex;
      flex-direction: row;

      width: 60%;
      max-width: 60%;

      @media screen and (max-width: 580px) {
        align-items: center;
        /* border: 1px solid yellow; */
        width: 100%;
        max-width: 100%;
      }



      .containerImg {
        display: flex;
        justify-content: center;
        align-items: center;
  
        height: 100%;
        min-height: 123px;
        width: 135px;
        min-width: 135px;
        
        background-color: #ffff;
  
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
  
        img {
          background-color: #21252b;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          width: 115px;
          height: 122px;
          max-height: 122px;
          /* display: none; */
  
          @media screen and (min-width: 563px) {
            /* height: 113px; */
            /* width: 100%; */
            max-width: 100%;
            border-radius: 5px;
          }
        }
      }
      
      .nameAndCor {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;

        margin-left: 1rem;

        width: 100%;
        max-width: 100%;

        @media screen and (min-width: 563px) {
          flex-direction: row;
          gap: 20px;
          align-items: center;
        }

        @media screen and (max-width: 350px) {
          margin-left: 2px;
        }
        
        .containerNome {
          display: flex;
          flex-direction: column;
          gap: 9px;

          .unlink {
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #000000;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 16px;
          }

          span {
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            letter-spacing: 0.1em;
            color: #5e5e5e;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
          }
        }
      }
    }
    .quantityAndValue {
        display: flex;
        justify-content: space-between;

        height: 100%;
        width: 250px;
        min-width: 17vw;
        margin-right: 1.5vw;

        /* border: 1px solid yellow; */
        
        @media screen and (min-width: 581px) {
          flex-direction: row;
        }
        
        @media screen and (max-width: 670px) {
          flex-direction: column;
        }

        @media screen and (max-width: 580px) {
          flex-direction: row-reverse;
          width: 100%;
          margin-right: 0px;

          /* border: 1px solid red; */
        }

        .containerQuantityAndExclude {
          display: flex;
          flex-direction: column;
          justify-content: center;

          height: 100%;
          gap: 0;
          margin-left: 15px;

          /* border: 1px solid blue; */

    
          @media screen and (min-width: 563px) {
            /* flex-direction: row; */
            gap: 8px;
          }

          @media screen and (max-width: 670px) {
            gap: 15px;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
          }
    
          .containerAmount {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;


            @media screen and (max-width: 580px) {
              position: relative;
              left: 20px;
            }

            span {
              font-size: 14px;
              color: #5e5e5e;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 19px;
              letter-spacing: 0.1em;
            }
    
            .BtnsAmount {
              display: flex;
              align-items: center;
              justify-content: space-between;

              width: 100%;
              gap: 3px;

              /* border: 1px solid black; */

              p {
                font-family: 'Roboto', sans-serif;
                font-weight: 900;
                font-size: 20px;
              }
    
              button {
                display: flex;
                align-items: center;
                justify-content: center;
    
                border-radius: 50%;
                width: 24px;
                height: 24px;
                padding: 0 1px 0 0;
                border: none;

                cursor: pointer;
    
                background-color: inherit;
    
                svg {
                  width: 19px;
                  height: 19px;
                }
              }
            }
          }
        }
    
        .containerRemove {
          display: flex;
          align-content: center;
          justify-content: space-between;
          cursor: pointer;
  
          border: none;
          height: 20px;
          background-color: inherit;
  
          @media screen and (min-width: 563px) {
            padding: 0;
            align-items: center;
            justify-content: center;
          }

          @media screen and (max-width: 580px) {
            position: relative;
            top: -150px;
            right: 10px;
          }

          p {
            color: red;
            padding-top: 2px;
            padding-left: 5px;
            
            @media screen and (max-width: 580px) {
              display: none;
            }
          }
  
          svg {
            width: 15px;
            height: 15px;
          }
        }
        .containerPrice {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          align-self: flex-end;
          
          height: 100%;
          gap: 10px;
          padding: 0 10px 10px 0;

          /* border: 1px solid red; */
    
          @media screen and (min-width: 563px) {
            padding: 0;
            align-self: center;
          }

          @media screen and (min-width: 563px) {
            align-items: center;
            /* flex-direction: row; */
          }

          @media screen and (max-width: 670px) {
            width: 100%;
            align-items: flex-end;
          }

          @media screen and (max-width: 580px) {
            align-items: flex-start;
            padding-left: 20px;
          }


          span {
            font-size: 14px;
            color: #5e5e5e;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0.1em;
          }

          p {
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 18px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: red;
          }
    
    
        }
      }
    }

  .cartVazio {
    margin-top: 20%;
    max-width: 90%;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #ffffff;
    background-color: rgba(33, 37, 43, 0.29);
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: inset 2px 3px 20px 9px rgb(33 37 43 / 99%);
  }
`;
