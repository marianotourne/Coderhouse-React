import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ id, name, price, stock, category, img }) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="itemDetail">
      <h2 className="itemDetailName">{name}</h2>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <p className="itemDetailPrice">U$S {price}</p>
      <p className="itemDetailCategory">Categoría: {category}</p>
      <ItemCount initial={1} stock={stock} />
      <button onClick={onBack} className="onBack">
        Volver
      </button>
    </div>
  );
};
