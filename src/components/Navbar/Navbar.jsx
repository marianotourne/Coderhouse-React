import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <nav>
        <h2>10:10</h2>
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
