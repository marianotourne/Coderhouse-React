import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  writeBatch,
  where,
  documentId,
  addDoc,
} from "@firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

// export const Checkout = () => {
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState("");

//   const { cartList, totalPrice, clearCart } = useContext(CartContext);

//   const createOrder = async ({ name, phone, email }) => {
//     setLoading(true);

//     try {
//       const objOrder = {
//         buyer: {
//           name,
//           phone,
//           email,
//         },
//         items: cartList,
//         total: totalPrice,
//         date: Timestamp.fromDate(new Date()),
//       };

//       const batch = writeBatch(db);
//       const outOfStock = [];
//       const ids = cartList.map((prod) => prod.id);
//       const productsRef = collection(db, "products");
//       const productAddedFromFirestore = await getDocs(
//         query(productsRef, where(documentId(), "in", ids))
//       );
//       const { docs } = productAddedFromFirestore;

//       docs.forEach((doc) => {
//         const dataDoc = doc.data();
//         const stockDb = dataDoc.stock;

//         const productAddedToCart = cartList.find((prod) => prod.id === doc.id);
//         const productQuantity = productAddedToCart?.quantity;

//         if (stockDb >= productQuantity) {
//           batch.update(doc.ref, { stock: stockDb - productQuantity });
//         } else {
//           outOfStock.push({ id: doc.id, ...dataDoc });
//         }
//       });

//       if (outOfStock.lenght === 0) {
//         await batch.commit();
//         const orderRef = collection(db, "orders");
//         const orderAdded = await addDoc(orderRef, objOrder);
//         setOrderId(orderAdded.id);
//         clearCart();
//       } else {
//         console.error("Productos sin stock");
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <h1>Se está generando la orden</h1>;
//   }

//   if (orderId) {
//     return <h1>Número de orden {orderId}</h1>;
//   }

//   return (
//     <>
//       <h1>Checkout</h1>
//       <CheckoutForm onConfirm={createOrder} />
//     </>
//   );
// };

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cartList, totalPrice, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cartList,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cartList.map((prod) => prod.id);
      const productsRef = collection(db, "products");
      const productAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cartList.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDb >= productQuantity) {
          batch.update(doc.ref, { stock: stockDb - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Productos sin stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando la orden</h1>;
  }

  if (orderId) {
    return <h1>Número de orden {orderId}</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </>
  );
};
