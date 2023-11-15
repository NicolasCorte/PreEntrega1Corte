import "./styles.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = (props) => {
  return (
    <li className="submenu">
      <div className="cart-num">
        <FaShoppingCart className="cart" />
        <p className="num">3</p>
      </div>
      <div id="carrito">
        <table id="lista-carrito">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
        </table>
        <a href="#" id="vaciar-carrito" className="btn-2">
          Vaciar Carrito
        </a>
      </div>
    </li>
  );
};

export default CartWidget;
