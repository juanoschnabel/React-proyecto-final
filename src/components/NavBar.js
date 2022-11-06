import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className=" col-12 navbar navbar-expand-lg navbar-text">
        <div className="container">
          <Link to="/" className="navbar-brand">
            KNOCK OUT MARKET
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navDistribucion navbar-collapse">
            <div>
              <ul className="xk">
                <li>
                  <Link to="/category/1" className=" active">
                    BOXEO / MMA / MUAY THAY
                  </Link>
                </li>
                <li>
                  <Link to="/category/7" className=" active">
                    TAE KWONDO / KARATE
                  </Link>
                </li>
                <li>
                  <Link to="/category/2" className=" active">
                    OTROS
                  </Link>
                </li>
              </ul>
            </div>
            <div className="carrito ">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <a className=" active" href="#">
                    Ingresar
                  </a>
                </li>
                <li className="nav-item ">
                  <a className=" active" href="#">
                    Registrarse
                  </a>
                </li>
              </ul>
              <div className="logo">
                <div>
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
