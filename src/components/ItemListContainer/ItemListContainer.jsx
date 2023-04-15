import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <main>
        <h2>{greeting}</h2>
        <ItemCount />
      </main>
    </>
  );
};
