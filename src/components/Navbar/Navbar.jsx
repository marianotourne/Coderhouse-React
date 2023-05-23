import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "analógicos",
    path: "analogicos",
  },
  {
    id: 2,
    name: "digitales",
    path: "digitales",
  },
  {
    id: 3,
    name: "smartwatch",
    path: "smartwatch",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h2>10:10</h2>
        </Link>
        <ul className="navbarOptions">
          {links.map((link) => (
            <li key={link.id}>
              {""}
              <NavLink to={`/category/${link.path}`}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
