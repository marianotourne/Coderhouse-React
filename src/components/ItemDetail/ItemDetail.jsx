import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ id, name, price, stock, category, img }) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [quantityBought, setQuantityBought] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityBought(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };

    addToCart(item, quantity);
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
        <Link to="/cart" className="btnConfirm">
          Ver carrito
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
