export const ProductCart = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>-</button>0<button>+</button>
    </>
  );
};
