import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({ id, name, price, stock, category, img }) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [quantityBought, setQuantityBought] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityBought(quantity);
  };

  return (
    <div className="itemDetail">
      <h2 className="itemDetailName">{name}</h2>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <p className="itemDetailPrice">U$S {price}</p>
      <p className="itemDetailCategory">Categoría: {category}</p>
      {quantityBought > 0 ? (
        <Link to="/cart" className="itemCount-purchasebtn">
          <button>Finalizar Compra</button>
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
      <button onClick={onBack} className="onBack">
        Volver
      </button>
    </div>
  );
};
