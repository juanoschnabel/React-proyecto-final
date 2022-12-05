import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(initial);
  }, []);
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const subtract = () => {
    if (count > initial + 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button type="button" className="btn btn-primary me-2" onClick={add}>
        +
      </button>
      <span className="alert alert-primary">{count}</span>
      <button type="button" className="btn btn-primary ms-2" onClick={subtract}>
        -
      </button>

      {stock && count >= 0 ? (
        <button
          type="button"
          className="btn btn-link"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      ) : (
        <Link to="/cart">
          <button type="button" className="btn btn-success">
            Ir al carrito
          </button>
        </Link>
      )}
    </>
  );
};
export default ItemCount;
