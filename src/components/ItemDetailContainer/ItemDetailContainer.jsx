import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncMock.js";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(4)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="itemDetailContainer">
        <ItemDetail {...product} />
      </div>
    </>
  );
};
