const products = [
  {
    id: 1,
    name: "lotus 18671/3",
    price: 200,
    stock: 4,
    category: "analógicos",
    img: "https://m.media-amazon.com/images/I/61-n5m3-SuL._AC_UY879_.jpg",
  },
  {
    id: 2,
    name: "braun BN0032BKBKMHG",
    price: 180,
    stock: 5,
    category: "analógicos",
    img: "https://m.media-amazon.com/images/I/81rAKYHwiML._AC_UX679_.jpg",
  },
  {
    id: 3,
    name: "casio vintage",
    price: 120,
    stock: 3,
    category: "digitales",
    img: "https://m.media-amazon.com/images/I/71oE44fIffL._AC_UY879_.jpg",
  },
  {
    id: 4,
    name: "festina F16476/1",
    price: 260,
    stock: 6,
    category: "analógicos",
    img: "https://m.media-amazon.com/images/I/61yO8urJ87L._AC_UX679_.jpg",
  },
  {
    id: 5,
    name: "amazfit bip 3",
    price: 420,
    stock: 6,
    category: "smartwatch",
    img: "https://m.media-amazon.com/images/I/61D44N16zDL._AC_SX679_.jpg",
  },
  {
    id: 6,
    name: "samsung galaxy watch4",
    price: 360,
    stock: 3,
    category: "smartwatch",
    img: "https://m.media-amazon.com/images/I/71lZlCmAGiL._AC_SX679_.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.find((product) => parseInt(product.id) === parseInt(id))
      );
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        )
      );
    }, 500);
  });
};

// function getCategories(products) {
//   const categories = [];
//   for (const prod of products) {
//     !categories.includes(prod.category) && categories.push(prod.category);
//   }
//   return categories;
// }

// export const categories = getCategories(products);

function getCategories(products) {
  const categories = new Set();
  products.forEach((product) => {
    categories.add(product.category);
  });
  return [...categories];
}

export const categories = getCategories(products);
