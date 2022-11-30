import { useContext } from "react";
import { CartContext } from "./CartContext";
// import { Link } from "react-router-dom";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import "../css/MapCart.css";

const Resumen = () => {
  const { clear, Total, cartList } = useContext(CartContext);

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Pedro Perez",
        email: "pedroperez@yahoo.com",
        phone: "1158474655",
      },
      date: serverTimestamp(),
      items: cartList.map((item) => ({
        id: item.id,
        title: item.name,
        price: item.price,
        qty: item.qty,
      })),
      total: Total(),
    };
    const createOrderInDB = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInDB()
      .then((response) => {
        alert(
          `Se creó tu orden de compra en la Base de Datos con el ID: ${response.id}`
        );
        cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qty),
          });
        });
        clear();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div id="header">
        <header className="">
          <span>
            <h3>TOTAL: ${Total()}</h3>
          </span>
          <div>
            <button onClick={clear}>VACIAR CARRITO</button>
            <button onClick={createOrder}>TERMINAR MI COMPRA</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Resumen;
