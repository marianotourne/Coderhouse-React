import React from "react";
import "./style.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <main>
        <h2>{greeting}</h2>
      </main>
    </>
  );
};
