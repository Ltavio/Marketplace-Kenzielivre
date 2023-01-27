import { useEffect, useState } from "react";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { ButtonAll } from "../../../../components/Button";
import TransitionPage from "../../../../components/TransitionPage";
import { useCart } from "../../../../Context/Cart";
import Cartao from "../Cartao";
import Pix from "../Pix";
import { CheckoutStyled } from "./style";

const Checkout = () => {
  const [payment, setPayment] = useState<string>("cartao");
  const { navigation } = useCart();

  return (
    <TransitionPage>
      <CheckoutStyled>
        <div className="containerResume">
          <h1 className="title">CHECKOUT</h1>
          <h2 className="subtitle">Métodos de pagamento</h2>
          <div className="containerPayments">
            <div className="checkbox">
              <input
                name="paymentType"
                onChange={() => setPayment("cartao")}
                id="credito"
                type="radio"
                defaultChecked={payment === "pix" ? false : true}
              />
              <label htmlFor="credito">Cartão de credito</label>
            </div>
            <div className="checkbox">
              <input
                name="paymentType"
                onChange={() => setPayment("pix")}
                id="pix"
                type="radio"
              />
              <label htmlFor="pix">Pix</label>
            </div>
            <div>
              {payment === "pix" ? (
                <Pix />
              ) : payment === "cartao" ? (
                <Cartao />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </CheckoutStyled>
    </TransitionPage>
  );
};
export default Checkout;
