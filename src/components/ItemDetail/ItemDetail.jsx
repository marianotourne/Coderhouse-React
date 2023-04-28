import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, price, stock, category, img }) => {
  return (
    <div className="itemDetail">
      <h2>{name}</h2>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <p className="itemDetailPrice">U$S {price}</p>
      <p className="itemDetailCategory">Categoría: {category}</p>
      <ItemCount initial={1} stock={stock} />
    </div>
  );
};
