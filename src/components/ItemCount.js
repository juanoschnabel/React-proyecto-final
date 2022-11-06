import { useState } from "react";
const ItemCount = () => {
  const [init, setInit] = useState(0);
  const add = () => {
    setInit(init + 1);
  };
  const subtract = () => {
    if (init > 0) {
      setInit(init - 1);
    }
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={add}>
        Agregar producto al carrito
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-primary" onClick={subtract}>
        Eliminar producto del carrito
      </button>
      <br />
      <br />
      <span className="alert alert-primary">
        Agregaste {init} unidades al carrito{" "}
      </span>
    </>
  );
};
export default ItemCount;
