import { useContext } from "react";
import { CartContext } from "./CartContext";
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
      <div className="ms-5 mt-3">
        <div className="card-body">
          <h5 className="card-title">TOTAL: ${Total()}</h5>
          <button type="button" className="btn btn-danger me-3" onClick={clear}>
            VACIAR CARRITO
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={createOrder}
          >
            TERMINAR MI COMPRA
          </button>
        </div>
      </div>
    </>
  );
};

export default Resumen;
