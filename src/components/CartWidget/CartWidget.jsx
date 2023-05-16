import "./CartWidget.css";
import carrito from "./assets/imgCarrito.svg";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  if (totalQuantity !== 0) {
    return (
      <>
        <Link to="/Cart" className="cartWidget">
          <img src={carrito} alt="carrito" />
          <span>{totalQuantity}</span>
        </Link>
      </>
    );
  }
};
