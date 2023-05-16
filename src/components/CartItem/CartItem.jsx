import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartItem.css";

export const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="cartItemRow">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div>
          <p className="cartItemRow-name">{name}</p>
          <p className="cartItemRow-info">Precio Unitario: U$S {price}</p>
          <p className="cartItemRow-info">Cantidad: {quantity}</p>
          <p className="cartItemRow-info">Subtotal: U$S {price * quantity}</p>
          <button
            onClick={() => removeItem(id)}
            className="btnDecline btnDelete"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
