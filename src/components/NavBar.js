import "../css/NavBar.css";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav className=" col-12 navbar navbar-expand-lg navbar-text">
        <div class="container">
          <a class="navbar-brand" href="#">
            KNOCK OUT MARKET
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navDistribucion navbar-collapse">
            <div className="">
              <ul class="xk">
                <li class="">
                  <a class=" active" href="#">
                    BOXEO
                  </a>
                </li>
                <li class="">
                  <a class=" active" href="#">
                    TAE KWONDO / KARATE
                  </a>
                </li>
                <li class="">
                  <a class=" active" href="#">
                    MMA / MUAY THAY
                  </a>
                </li>
                <li class="">
                  <a class=" active" href="#">
                    OTROS
                  </a>
                </li>
              </ul>
            </div>
            <div className="carrito ">
              <ul class="navbar-nav ">
                <li class="nav-item ">
                  <a class=" active" href="#">
                    Ingresar
                  </a>
                </li>
                <li class="nav-item ">
                  <a class=" active" href="#">
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
