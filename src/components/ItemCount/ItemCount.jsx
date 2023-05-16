import { React, useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => setQuantity(quantity - 1);
  const increment = () => setQuantity(quantity + 1);

  return (
    <>
      <div className="itemCount-container">
        <div className="itemCount-btn">
          <button onClick={decrement} disabled={quantity === 0}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increment} disabled={stock === quantity}>
            +
          </button>
        </div>
        <button
          className="btnConfirm"
          onClick={() => quantity !== 0 && onAdd(quantity)}
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
