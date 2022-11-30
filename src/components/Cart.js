import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Resumen from "./Resumen";
import MapCart from "./MapCart";
import "../css/MapCart.css";
const Cart = () => {
  const { cartList, calcItemsQty } = useContext(CartContext);
  return (
    <>
      <h1>TU CARRITO</h1>
      {cartList.length === 0 ? (
        <>
          <div>Tu carrito está vacío</div>
          <Link to="/"> Clickeá acá para seguir comprando</Link>
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
