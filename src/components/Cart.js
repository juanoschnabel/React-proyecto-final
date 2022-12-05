import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Resumen from "./Resumen";
import MapCart from "./MapCart";
import "../css/MapCart.css";
const Cart = () => {
  const { cartList } = useContext(CartContext);
  return (
    <>
      <h1 className="text-center fs-2 fst-normal">TU CARRITO</h1>
      {cartList.length === 0 ? (
        <>
          <div className="d-flex justify-content-evenly">
            <span className="fs-4 fst-normal ms-5">El carrito está vacío</span>
            <Link to="/">
              <span className="fs-4 fst-normal me-5">
                Click aqui para seguir comprando
              </span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="grid">
            <MapCart></MapCart>
            <Resumen></Resumen>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
