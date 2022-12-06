import { createContext, useState } from "react";

export const CartContext = createContext();

const CartcontextProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, qty) => {
    const itemFind = cartList.find((element) => element.id === item.id);

    if (itemFind === undefined) {
      setCartList([
        {
          id: item.id,
          name: item.name,
          price: item.price,
          qty: qty,
          img: item.img,
          subtotal: item.price * qty,
        },
        ...cartList,
      ]);
    } else {
      const prevQty = Number(itemFind.qty);
      const prevId = itemFind.id;
      let newCartList = cartList.filter((element) => element.id !== prevId);
      setCartList([
        {
          id: item.id,
          name: item.name,
          price: item.price,
          qty: qty + prevQty,
          img: item.img,
          subtotal: item.price * qty,
        },
        ...newCartList,
      ]);
    }
  };

  const clear = () => {
    setCartList([]);
  };
  const removeItem = (id) => {
    let itemDelete = cartList.filter((item) => item.id !== id);
    setCartList(itemDelete);
  };
  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qty);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };
  const Total = () => {
    let total = cartList.map((item) => item.subtotal);
    return total.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clear,
        removeItem,
        calcItemsQty,
        Total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartcontextProvider;
