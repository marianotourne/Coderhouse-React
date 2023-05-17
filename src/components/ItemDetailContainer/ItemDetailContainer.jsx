import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
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
