import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getFunction = categoryId ? getProductsByCategory : getProducts;

    getFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <main>
        <ItemList products={products} />
      </main>
    </>
  );
};
