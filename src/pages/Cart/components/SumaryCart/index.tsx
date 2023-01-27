import { ButtonAll } from "../../../../components/Button";
import { Sumarystyled } from "./style";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../../../../Context/Cart";
const SumaryCart = () => {
  const { navigation, cartRemove, totalCart } = useCart();

  return (
    <Sumarystyled>
      <div className="containerResume">
        <div className="containertitle">
          <TiShoppingCart color="white" size={21}/>
          <h2 className="title">Resumo</h2>
        </div>
        <div className="containerSumary">
          <div className="lineSumary">
            <p>Sub total:</p>
            <p className="values">R$ {totalCart().toFixed(2)}</p>
          </div>
          <div className="lineSumary">
            <p>Taxa:</p>
            <p className="values">0</p>
          </div>
          <div className="lineSumary">
            <p>Desconto:</p>
            <p className="values">0</p>
          </div>
          <div className="lineSumaryTotal">
            <p className="totalName">Total à prazo:</p>
            <p className="totalValue">R$ {totalCart().toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <ButtonAll
          onCLick={() => navigation("/cart/checkout")}
          type="button"
          background="deft"
          size="small"
          children="Avançar para checkout"
        />
        <ButtonAll
          onCLick={() => cartRemove()}
          type="button"
          background="greey"
          size="small"
          children="Esvaziar carrinho"
        />
      </div>
    </Sumarystyled>
  );
};

export default SumaryCart;
