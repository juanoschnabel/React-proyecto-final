import "./css/App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import CartcontextProvider, { CartContext } from "./components/CartContext";
const app = () => {
  return (
    <>
      <CartcontextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer text="TODOS LOS PRODUCTOS" />}
            />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer text="FILTROS APLICADOS" />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartcontextProvider>
    </>
  );
};
export default app;
