import { Item } from "../Item/Item.jsx";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="ItemList">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
