import ItemList from "./ItemList";
import "../css/ItemListContainer.css";
import { useState } from "react";
import { products } from "../utils/products.js";
import customFetch from "../utils/customFetch";
import { useEffect } from "react";
import { useParams } from "react-router";
const ItemListContainer = (greeting) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    if (idCategory === undefined) {
      customFetch(2000, products)
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        products.filter((item) => item.categoryId == idCategory)
      )
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <>
      <div>
        <p className="ItemListContainer">{greeting.text}</p>
      </div>
      <ItemList items={datos} />
    </>
  );
};
export default ItemListContainer;
