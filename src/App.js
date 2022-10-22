import "./css/App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const app = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer text="TODOS LOS PRODUCTOS" />
    </>
  );
};
export default app;
