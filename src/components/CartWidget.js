import { AiOutlineShoppingCart } from "react-icons/ai";
import Notification from "./Notification";
const CartWidget = () => {
  return (
    <>
      <div className="logo">
        <div>
          <AiOutlineShoppingCart />{" "}
        </div>
        <Notification note={4} />
      </div>
    </>
  );
};
export default CartWidget;
