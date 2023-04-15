import { ProductCart } from "../ProductCart/ProductCart";

const products = [
  { name: "Rolex", price: 2000, stock: 3 },
  { name: "Casio", price: 100, stock: 4 },
  { name: "Mistral", price: 250, stock: 2 },
];

export const ItemCount = () => {
  return (
    <>
      <h5>Listado de productos</h5>
      {products.map((product) => (
        <ProductCart name={product.name} price={product.price} />
        //A ProductCart quiero mandar todas las props de una, no una por una
      ))}
    </>
  );
};
