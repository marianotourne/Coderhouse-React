import { createContext, useState } from "react";

export const CartContext = createContext({ cartList: [] });

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  // const [cartList, setCartList] = useState(() => {
  //   const saveProducts = localStorage.getItem("productsLS");
  //   if (saveProducts) {
  //     return JSON.parse(saveProducts);
  //   } else {
  //     return [];
  //   }
  // });
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cartList.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });
      setCartList(updatedCart);
    } else {
      setCartList((previous) => [...previous, { ...item, quantity }]);
    }
    setTotalQuantity((previous) => previous + quantity);
    setTotalPrice((previous) => previous + item.price * quantity);
  };

  const removeItem = (itemId) => {
    const removedItem = cartList.find((product) => product.id === itemId);
    const updatedCart = cartList.filter((product) => product.id !== itemId);
    setCartList(updatedCart);
    setTotalQuantity((previous) => previous - removedItem.quantity);
    setTotalPrice(
      (previous) => previous - removedItem.price * removedItem.quantity
    );
  };

  const clearCart = () => {
    setCartList([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  const isInCart = (itemId) => {
    return cartList.some((product) => product.id === itemId);
  };

  // useEffect(() => {
  //   localStorage.setItem("productsLS", JSON.stringify(cartList));
  //   localStorage.setItem("qtyCart", JSON.stringify(totalQuantity));
  // }, [cartList, totalQuantity]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
