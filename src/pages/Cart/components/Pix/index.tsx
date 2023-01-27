import { ButtonAll } from "../../../../components/Button";
import { useCart } from "../../../../Context/Cart";
import { PixStyled } from "./style";

const Pix = () => {
  const { navigation, setPix } = useCart();

  return (
    <>
      <PixStyled>
        <ButtonAll size="medium" type="button" background="deft" onCLick={()=>setPix(true)}>
          Gerar código PIX
        </ButtonAll>
      </PixStyled>
      <div className="buttons">
        <ButtonAll
          size="small"
          background="deft"
          type="button"
          onCLick={() => navigation("/cart/finishCart")}
        >
          Avançar para finalização
        </ButtonAll>
        <ButtonAll
          onCLick={() => navigation("/cart")}
          type="button"
          size="small"
          background="greey"
        >
          Voltar
        </ButtonAll>
      </div>
    </>
  );
};
export default Pix;
