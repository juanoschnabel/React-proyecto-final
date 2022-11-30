import { AiOutlineShoppingCart } from "react-icons/ai";
import Notification from "./Notification";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cartList, calcItemsQty } = useContext(CartContext);
  return (
    <>
      {cartList.length === 0 ? (
        <>
          <Link to="/cart">
            <div>
              <AiOutlineShoppingCart />{" "}
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="logo">
            <Link to="/cart">
              <div>
                <AiOutlineShoppingCart />{" "}
              </div>
            </Link>
            <Notification note={calcItemsQty()} />
          </div>
        </>
      )}
    </>
  );
};
export default CartWidget;
