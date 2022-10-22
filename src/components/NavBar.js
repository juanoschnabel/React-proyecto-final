import "../css/NavBar.css";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav className=" col-12 navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
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
          <div class="navDistribucion collapse navbar-collapse" id="navbarNav">
            <div className="">
              <ul class="navbar-nav">
                <li class="nav-item border border-2 border-info">
                  <a class="nav-link active" href="#">
                    BOXEO
                  </a>
                </li>
                <li class="nav-item border border-2 border-info">
                  <a class="nav-link active" href="#">
                    TAE KWONDO / KARATE
                  </a>
                </li>
                <li class="nav-item border border-2 border-info">
                  <a class="nav-link active" href="#">
                    MMA / MUAY THAY
                  </a>
                </li>
                <li class="nav-item border border-2 border-info">
                  <a class="nav-link active" href="#">
                    OTROS
                  </a>
                </li>
              </ul>
            </div>
            <div className="carrito me-5">
              <ul class="navbar-nav me-4">
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#">
                    Ingresar
                  </a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#">
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
