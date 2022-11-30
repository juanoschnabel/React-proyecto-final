import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../css/MapCart.css";
const MapCart = () => {
  const { cartList, removeItem, calcItemsQty } = useContext(CartContext);
  const pepe = calcItemsQty();
  return cartList.map((item) => (
    <>
      <div id="main">
        <div className="card col-4">
          <span>
            <h3>{item.name}</h3>
          </span>
          <img className="img-thumbnail" src={item.img}></img>
          <div>
            <ul class="list-group">
              <li class="list-group-item">Precio unitario ${item.price}</li>
              <li class="list-group-item">Cantidad seleccionada {item.qty}</li>
              <li class="list-group-item">Subtotal ${item.subtotal}</li>
            </ul>
          </div>
          <span>
            <button onClick={() => removeItem(item.id)}>Borrar Artículo</button>
          </span>
        </div>
      </div>
    </>
  ));
};
export default MapCart;
