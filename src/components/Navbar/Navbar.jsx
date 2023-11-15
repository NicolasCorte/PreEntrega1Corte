import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

const Navbar = (props) => {
  return (
    <div className="menu-navbar">
      <a href="#" className="logo">
        Naiki
      </a>
      <div className="list-container">
        <input type="checkbox" id="menu"></input>
        <label for="menu"></label>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>
        </nav>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
