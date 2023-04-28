import "./Item.css";

export const Item = ({ id, name, price, stock, category, img }) => {
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
        <button>Ver Detalle</button>
      </div>
    </>
  );
};
