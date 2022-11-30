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
      <button type="button" className="btn btn-primary" onClick={add}>
        +
      </button>
      <span className="alert alert-primary">{count}</span>
      <button type="button" className="btn btn-primary" onClick={subtract}>
        -
      </button>

      {stock && count >= 0 ? (
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </>
  );
};
export default ItemCount;
