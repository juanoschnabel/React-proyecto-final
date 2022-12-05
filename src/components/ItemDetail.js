import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const onAdd = (qty) => {
    alert("Agregaste  " + qty + " productos a tu carrito!");
    setItemCount(qty);
    addToCart(item, qty);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={item.img}></img>
          </div>
          <div className="col-md-6">
            <div className="flex-column ">
              <h1 className="fs-4">{item.name}</h1>{" "}
              <h3 className="fs-5">Precio: ${item.price}</h3>
              <h5 className="fs-6">Stock: {item.stock}</h5>
            </div>
            <br></br>
            <br></br>
            <div className="mt-auto p-2 bd-highlight">
              {itemCount === 0 ? (
                <ItemCount
                  stock={item.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/cart">
                  <button type="button" className="btn btn-success">
                    Ir al carrito
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
