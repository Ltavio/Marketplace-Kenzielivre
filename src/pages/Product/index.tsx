import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Box from "../../components/Box";
import { ButtonAll } from "../../components/Button";
import CardExtra from "../../components/cardExtra";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import { useRequest } from "../../Context/Request";
import { IProduct, ICardExtra } from "../Home/components/CarouselProduct";
// import { IProduct, ICardExtra } from "./components/CarouselProduct";



import { v4 as uuid } from "uuid";

import {
  ContainerProduct,
  DivImageProduct,
  ProductInfo,
  ProductStyle,
} from "./style";
import { useModal } from "../../Context/Modal";

const Product = () => {
  const navigate = useNavigate();

  const { leaveModalFunction } = useModal();
  useEffect(() => leaveModalFunction(), []);

  const { SearchProductId, deleteProduct } = useRequest();
  const { id } = useParams();

  const [product, setProduct] = useState<any>();
  const [imageMain, setImageMain] = useState<string>("");

  
  const arrayProdutos:IProduct[] = [
      {
        id:1,
        images:[
          "https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-com-rgb-lightsync-6-botoes-programaveis-ajuste-de-peso-e-sensor-hero-25k-910-005631_1669896405_gg.jpg",
          "https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-com-rgb-lightsync-6-botoes-programaveis-ajuste-de-peso-e-sensor-hero-25k-910-005631_1669896407_gg.jpg", 
          "https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-com-rgb-lightsync-6-botoes-programaveis-ajuste-de-peso-e-sensor-hero-25k-910-005631_1669896409_gg.jpg"],
        description:"Mouse Gamer Logitech G403 HERO com RGB LIGHTSYNC, 6 Botões Programáveis, Ajuste de Peso e Sensor HERO 25K - 910-005631",
        lastPrice: 277.77,
        currentPrice: 224.99,
        promotion: true,
        category: "Eletrônico",
        brand: "Logitech G",
        model: "910-005631",
        color: "Preto",
        quantity: 15,
        warranty: "2 ano",
      },
      {
        id:2,
        images:["https://images.kabum.com.br/produtos/fotos/333145/processador-amd-ryzen-5-4600g-cache-11mb-3-7ghz-4-2ghz-max-turbo-am4-video-integrado-100-100000147box_1653338731_gg.jpg"],
        description:"Processador AMD Ryzen 5 4600G, 3.7GHz (4.2GHz Max Turbo), Cache 11MB, AM4, Vídeo Integrado - 100-100000147BOX",
        lastPrice:1323.06,
        currentPrice: 619.99,
        promotion: true,
        category: "Eletrônico",
        brand: "AMD",
        model: "100-100000147BOX",
        color: "-",
        quantity: 7,
        warranty: "1 ano",
      },
      {
        id:3,
        images:[
          "https://images.kabum.com.br/produtos/fotos/155193/monitor-gamer-samsung-odyssey-g5-34-curvo-165hz-1ms-ultra-wqhd-hdmi-displayport-amd-freesync-premium-preto-lc34g55twwlxzd_1617796502_g.jpg",
          "https://images.kabum.com.br/produtos/fotos/155193/monitor-gamer-samsung-odyssey-g5-34-curvo-165hz-1ms-ultra-wqhd-hdmi-displayport-amd-freesync-premium-preto-lc34g55twwlxzd_1617796498_gg.jpg",
          "https://images.kabum.com.br/produtos/fotos/155193/monitor-gamer-samsung-odyssey-g5-34-curvo-165hz-1ms-ultra-wqhd-hdmi-displayport-amd-freesync-premium-preto-lc34g55twwlxzd_1617796499_gg.jpg",
        ],
        description:"Monitor Gamer Samsung Odyssey G5 34' VA, Curvo, Wide, 165 Hz, 2K QHD, 1ms, FreeSync Premium, HDR10, HDMI/DisplayPort - LC34G55TWWLXZD",
        lastPrice:4099.99,
        currentPrice: 3987.99,
        promotion: true,
        category: "Eletrônico",
        brand: "Samsung",
        model: "LC34G55TWWLXZD",
        color: "Preto",
        quantity: 10,
        warranty: "1 ano",
      },
      {
        id:4,
        images:[
          "https://m.media-amazon.com/images/I/51FUhlHc42L.__AC_SX300_SY300_QL70_ML2_.jpg",
          "https://m.media-amazon.com/images/I/51LQLtDVNfL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/51deKsEeoFL._AC_SX679_.jpg",
        ],
        description:"Headphone Fone de Ouvido Havit HV-H2232d, Gamer, Iluminação RGB, com Microfone, Falante de 50mm, Conector 3.5mm, HAVIT, HV-H2232d",
        lastPrice:144.90,
        currentPrice: 106.90,
        promotion: true,
        category: "Periféricos",
        brand: "havit",
        model: "H2232d",
        color: "Preto",
        quantity: 19,
        warranty: "1 ano",
      },
      {
        id:5,
        images:[
          "https://m.media-amazon.com/images/I/616Lyy60cTL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/61APLFMdyPL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/61lQgGNIJ8L._AC_SX679_.jpg",
        ],
        description:"Teclado Gamer Semi Mecânico Multimídia Led Rgb Qwerty Antighosting Usb para Pc Notebook Xbox Series X S Ps4 Ps5",
        lastPrice:120.99,
        currentPrice: 69.90,
        promotion: true,
        category: "Periféricos",
        brand: "Finding",
        model: "abc89696853",
        color: "-",
        quantity: 25,
        warranty: "1 ano",
      },
      {
        id:6,
        images:[
          "https://m.media-amazon.com/images/I/51LhrsCFUSL.__AC_SX300_SY300_QL70_ML2_.jpg",
          "https://m.media-amazon.com/images/I/31UYhxNrPvL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/31zwwgNDlpL._AC_SX679_.jpg",
        ],
        description:"Monitor Extream 21,5', Full HD, Led, 75hz, HDMI/VGA, VESA, Flicker Free",
        lastPrice:699.90,
        currentPrice: 599.90,
        promotion: true,
        category: "Eletrônico",
        brand: "EXTREAM",
        model: "MOEXHD02",
        color: "Preto",
        quantity: 5,
        warranty: "1 ano",
      },
      {
        id:7,
        images:[
          "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-aquarius-intel-pequena-001_3.jpg",
          "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-aquarius-intel-pequena-004.jpg",
          "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-aquarius-intel-pequena-003_3.jpg",
        ],
        description:"COMPUTADOR PICHAU GAMER, INTEL I5-10400F, GEFORCE RTX 2060 6GB, 8GB DDR4, SSD 240GB",
        lastPrice:5620.00,
        currentPrice: 3599.98,
        promotion: true,
        category: "Eletrônico",
        brand: "Pichau",
        model: "-",
        color: "Preto",
        quantity: 2,
        warranty: "1 ano",
      },
      {
        id:8,
        images:[
          "https://m.media-amazon.com/images/I/71VqjPlOJAL.__AC_SX300_SY300_QL70_ML2_.jpg",
          "https://m.media-amazon.com/images/I/71HX5fbRqDL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/61B+T1MuYmL._AC_SX679_.jpg",
        ],
        description:"Cadeira Gamer Profissional TGC12 Preta ThunderX3.",
        lastPrice:1931.00,
        currentPrice: 1329.99,
        promotion: true,
        category: "Móveis para TV, Som e Home Theater",
        brand: "ThunderX3",
        model: "TGC12BK",
        color: "Preta",
        quantity: 4,
        warranty: "1 ano",
      },
      {
        id:9,
        images:[
          "https://m.media-amazon.com/images/I/41Q-soGuRIL.__AC_SX300_SY300_QL70_ML2_.jpg",
          "https://m.media-amazon.com/images/I/517h9JA5dzL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/41tb-PfNXNL._AC_SX679_.jpg",
        ],
        description:"Suporte Articulado de Mesa com Pistão a Gás Para Monitores de 17' a 35' até 9kg - F80N ELG",
        lastPrice:269.90,
        currentPrice: 199.99,
        promotion: true,
        category: "Computadores e informática",
        brand: "ELG",
        model: "F80N",
        color: "Preto",
        quantity: 17,
        warranty: "1 ano",
      },
      {
        id:10,
        images:[
          "https://m.media-amazon.com/images/I/41Q-K35hFRL.__AC_SX300_SY300_QL70_ML2_.jpg",
        ],
        description:"Base Cooler Para Notebook Vertical Multilaser - Ac166",
        lastPrice:88.84,
        currentPrice: 78.69,
        promotion: true,
        category: "Computadores e informática",
        brand: "Multilaser",
        model: "AC166",
        color: "Cinza",
        quantity: 30,
        warranty: "1 ano",
      },
      {
        id:11,
        images:[
          "https://m.media-amazon.com/images/I/61O-luzSZyL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/61bBRG-iEvL._AC_SX679_.jpg",
        ],
        description:"Quadro Grande 5 peças Lionel Messi Barcelona Jogador Futebol 116x60",
        lastPrice:89.90,
        currentPrice: 69.90,
        promotion: true,
        category: "Quadros",
        brand: "Fanarte",
        model: "-",
        color: "-",
        quantity: 1,
        warranty: "-",
      },
      {
        id:12,
        images:[
          "https://m.media-amazon.com/images/I/61kD52KblYL.__AC_SX300_SY300_QL70_ML2_.jpg",
          "https://m.media-amazon.com/images/I/617GMe9JBKL._AC_SX425_.jpg",
        ],
        description:"PlayStation®5 + God of War Ragnarök",
        lastPrice:5399.00,
        currentPrice: 4799.90,
        promotion: true,
        category: "Games e consoles",
        brand: "Sony",
        model: "CFI-1214A01X",
        color: "Branco",
        quantity: 5,
        warranty: "1 ano",
      },
  ]

  useEffect(() => {
    leaveModalFunction();
    
    arrayProdutos.filter(element => {
      if(element.id === Number(id)) {
        setProduct(element)
        if (element.images) {
          setImageMain(element.images[0])
        }
      }
    })

    /* SearchProductId(Number(id))
      .then((result) => {
        setProduct(result);
        console.log(result)
        // @ts-ignore ou // @ts-expect-error
        setImageMain(result?.images[0]);
      })
      .catch((error) => console.log(error)); */
  }, []);

  const user = JSON.parse(localStorage.getItem("@KenzieLivre:User") as string);

  const addCart = () => {

    toast.success("Adicionado ao carrinho")

    const arrayCart = JSON.parse(
      localStorage.getItem("@KenzieLivre:Cart") as string
    );

    let existe = false;

    const productCart = arrayCart.map((productCart: any) => {
      if (productCart.id == product.id) {
        productCart.productQuantity++;

        existe = true;

        return productCart;
      }

      return productCart;
    });

    if (!existe) {
      product.productQuantity = 1;

      productCart.push(product);
    }

    

    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(productCart));
  };

  const addGoCart = () => {
    addCart();
    navigate("/cart");
  };

  const deleteProductFunction = () => {
    deleteProduct(product.id)
      .then((res) => {
        toast.success("Produto deletado");
        navigate("/home");
      })
      .catch((err) => toast.error("Erro ao deletar o produto"));
  };

  return (
    <TransitionPage>
      <ProductStyle>
        <Header onText={() => {}} />
        <ContainerProduct>
          <DivImageProduct>
            <div className="miniImage">
              {product?.images?.map((image: any) => (
                <CardExtra
                  key={uuid()}
                  type="imgExtraProduct"
                  alt={product.model}
                  src={image}
                  takeImage={(img) => setImageMain(img)}
                />
              ))}
            </div>
            <div className="mainImage">
              <img
                src={imageMain && imageMain}
                alt={product && product?.model}
              />
            </div>
          </DivImageProduct>
          <Box width="615px" MediaQuery="1133px">
            <ProductInfo>
              <div className="topInfo">
                <p className="newProduct">Novo</p>
                <h2 className="titleProduct">
                  {product && product?.description}
                </h2>
                <p className="priceProduct">
                  R$ {product && Number(product?.currentPrice).toFixed(2)}
                </p>
                <p className="stockProduct">
                  {product && product?.quantity > 0
                    ? "Estoque disponivel"
                    : "Estoque indisponivel"}
                </p>
                <p className="quantityProduct">
                  Quantidade: <p> {product && product?.quantity} unidade</p>
                </p>
              </div>
              <div className="buttonsProduct">
                <ButtonAll
                  onCLick={addGoCart}
                  background="deft"
                  size="medium"
                  children="Comprar"
                  type="submit"
                />
                <ButtonAll
                  onCLick={addCart}
                  background="transp"
                  size="medium"
                  children="Adicionar ao carrinho"
                  type="submit"
                />
                {product?.userId === user?.id && (
                  <ButtonAll
                    onCLick={() => navigate(`/updateProduct/${product.id}`)}
                    background="transp"
                    size="medium"
                    children="Atualizar Produto"
                    type="submit"
                  />
                )}
                {product?.userId === user?.id && (
                  <ButtonAll
                    onCLick={deleteProductFunction}
                    background="transp"
                    size="medium"
                    children="Excluir Produto"
                    type="submit"
                  />
                )}
              </div>
              <div className="technicalProduct">
                <h2 className="heTechnical">Características</h2>
                <div className="tableTechnical">
                  <table>
                    <tr>
                      <th className="thDark">Marca</th>
                      <td className="tdDark">{product && product?.brand}</td>
                    </tr>
                    <tr>
                      <th className="thLight">Modelo</th>
                      <td className="tdLight">{product && product?.model}</td>
                    </tr>
                    <tr>
                      <th className="thDark">Cor</th>
                      <td className="tdDark">{product && product?.color}</td>
                    </tr>
                    <tr>
                      <th className="thLight">Garantia</th>
                      <td className="tdLight">
                        {product && product?.warranty}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </ProductInfo>
          </Box>
        </ContainerProduct>
      </ProductStyle>
      <Footer />
    </TransitionPage>
  );
};
export default Product;
