import React from "react";
import "./style.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <nav>
        <h2>Relojes</h2>
        <ul>
          <li>Analógicos</li>
          <li>Digitales</li>
          <li>Smartwatch</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
