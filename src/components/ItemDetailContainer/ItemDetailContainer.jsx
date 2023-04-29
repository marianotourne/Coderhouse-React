import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncMock.js";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <>
      <div className="itemDetailContainer">
        <ItemDetail {...product} />
      </div>
    </>
  );
};
