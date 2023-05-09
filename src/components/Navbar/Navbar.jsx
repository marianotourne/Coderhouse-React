import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { categories } from "../../asyncMock";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h2>10:10</h2>
        </Link>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              {""}
              <NavLink to={`/category/${category}`}>{category}</NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
