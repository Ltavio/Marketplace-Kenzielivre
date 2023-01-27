import { ProductCartStyled } from "./style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { IProductCart, useCart } from "../../../../Context/Cart";
import { CardDescription, CardImg } from "./style";

const ProductCart = () => {
  const { listCart, removeProduct, plusQuantity, minusQuantity } = useCart();
  return (
    <ProductCartStyled>
      {listCart.length > 0 ? (
        listCart.map((product: IProductCart) => (
          <li className="product" key={product.id}>
            <div className="productDetail">
              <CardImg to={`/home/${product.id}`} className="containerImg">
                <img src={product.images[0]} alt={product.brand} />
              </CardImg>
              <div className="nameAndCor">
                <div className="containerNome">
                  <span>{product.brand}</span>
                  <CardDescription to={`/home/${product.id}`} className="unlink">{product.description}</CardDescription>
                  <span>código: {product.id}</span>
                </div>
              </div>
            </div>
            <div className="quantityAndValue">
              <div className="containerQuantityAndExclude">
                <div className="containerAmount">
                  <span>Quant:</span>
                  <div className="BtnsAmount">
                    <button onClick={() => minusQuantity(product.id)}>
                      <IoIosArrowBack />
                    </button>
                      <p>{product.productQuantity}</p>
                    <button onClick={() => plusQuantity(product.id)}>
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="containerRemove"
                >
                  <FaTrash color="red"/>
                  <p>REMOVER</p>
                </button>
              </div>
              <div className="containerPrice">
                  <span>Preço à vista:</span>
                  <p>
                    R${" "}
                    {product.promotion ? Number(product.currentPrice).toFixed(2) : Number( product.currentPrice ).toFixed(2)}
                  </p>
              </div>
            </div>
          </li>
        ))
      ) : (
        <span className="cartVazio">
          Vazio... você ainda não tem produtos no carrinho
        </span>
      )}
    </ProductCartStyled>
  );
};
export default ProductCart;
