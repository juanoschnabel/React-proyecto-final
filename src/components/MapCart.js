import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../css/MapCart.css";
const MapCart = () => {
  const { cartList, removeItem } = useContext(CartContext);
  return cartList.map((item) => (
    <>
      <div className="mt-5">
        <div className="col-6 ms-5">
          <span>
            <h3 className="fs-5">{item.name}</h3>
          </span>
          <img className="img rounded-start" src={item.img}></img>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Precio unitario
              <span className="badge bg-primary rounded-pill fs-6">
                ${item.price}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cantidad seleccionada
              <span className="badge bg-primary rounded-pill fs-6">
                {item.qty}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Subtotal
              <span className="badge bg-primary rounded-pill fs-6">
                ${item.subtotal}
              </span>
            </li>
          </ul>
          <span>
            <button
              className="btn btn-warning mt-2"
              onClick={() => removeItem(item.id)}
            >
              Eliminar Artículo del carrito
            </button>
          </span>
        </div>
      </div>
    </>
  ));
};
export default MapCart;
