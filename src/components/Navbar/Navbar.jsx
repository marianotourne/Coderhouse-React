import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h2>10:10</h2>
        </Link>
        <ul className="navbarOptions">
          <li>
            {""}
            <NavLink to={`/category/analógicos`}>analógicos</NavLink>
          </li>
          <li>
            {""}
            <NavLink to={`/category/digitales`}>digitales</NavLink>
          </li>
          <li>
            {""}
            <NavLink to={`/category/smartwatch`}>smartwatch</NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
