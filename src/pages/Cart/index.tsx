import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Box from "../../components/Box";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import { useCart } from "../../Context/Cart";
import { useModal } from "../../Context/Modal";
import ProductCart from "./components/productCart";
import SumaryCart from "./components/SumaryCart";
import { CartStyled } from "./style";

const Cart = () => {
  const { leaveModalFunction } = useModal();
  useEffect(() => {
    leaveModalFunction();
  }, []);

  const { checkout } = useParams();
  const { setListCart, setPix } = useCart();
  useEffect(() => {
    setPix(false);
    setListCart(
      JSON.parse(localStorage.getItem("@KenzieLivre:Cart") as string)
    );
  }, []);
  return (
    <TransitionPage>
      <CartStyled>
        <Header onText={() => "teste"} />
        <ProductCart />
        <div className="mainCart">
          <div className="containerBox">
            {checkout === "checkout" ? <Outlet /> : <SumaryCart />}
          </div>
        </div>
      </CartStyled>
    </TransitionPage>
  );
};
export default Cart;
