import React from "react";
import "./style.css";
import carrito from "./assets/imgCarrito.svg";

export const CartWidget = () => {
  return (
    <>
      <section>
        <img src={carrito} alt="carrito" />
        <span>3</span>
      </section>
    </>
  );
};
