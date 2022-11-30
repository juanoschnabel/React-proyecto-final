import ItemList from "../components/ItemList";
import "../css/ItemListContainer.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { firestoreFetch } from "../utils/firestoreUtils";
const ItemListContainer = (greeting) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    firestoreFetch(idCategory)
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  }, [idCategory]);
  return (
    <>
      <div>
        <p className="ItemListContainer">{greeting.text}</p>
      </div>
      <div className="row">
        <ItemList items={datos} />
      </div>
    </>
  );
};
export default ItemListContainer;
