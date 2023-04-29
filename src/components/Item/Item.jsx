import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, stock, img }) => {
  return (
    <>
      <div className="itemContainer">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="itemContainerInfo">
          <p className="itemContainerName">{name}</p>
          <p className="itemContainerPrice">U$S {price}</p>
          <p className="itemContainerStock">Stock: {stock}</p>
        </div>
        <Link to={`/item/${id}`} className="itemContainerBtnDetalle">
          Ver Detalle
        </Link>
      </div>
    </>
  );
};
