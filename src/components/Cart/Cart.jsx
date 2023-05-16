import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cartList, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <div className="cartItemEmpty">
          <h5 className="error">No hay productos</h5>
          <Link to="/" className="onBack">
            Volver a menú principal
          </Link>
        </div>
      </>
    );
  } else
    return (
      <div className="cartItemContainer">
        <div className="cartItem">
          {cartList.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </div>
        <div className="cartItemOptions">
          <button onClick={() => clearCart()} className="btnDecline">
            Vaciar carrito
          </button>
          <h3>Total: U$S {totalPrice}</h3>
          <Link to="/checkout" className="btnConfirm">
            Finalizar compra
          </Link>
        </div>
      </div>
    );
};
