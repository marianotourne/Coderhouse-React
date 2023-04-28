const products = [
  {
    id: 1,
    name: "Reloj Braun",
    price: 200,
    stock: 4,
    category: "analógico",
    img: "https://images.pexels.com/photos/262484/pexels-photo-262484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Reloj Casio 2",
    price: 180,
    stock: 5,
    category: "analógico",
    img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Reloj Plateado",
    price: 260,
    stock: 6,
    category: "analógico",
    img: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Reloj Casio digital",
    price: 120,
    stock: 3,
    category: "digital",
    img: "https://images.pexels.com/photos/7473304/pexels-photo-7473304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "apple watch",
    price: 420,
    stock: 6,
    category: "smartwatch",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "smart watch",
    price: 360,
    stock: 3,
    category: "smartwatch",
    img: "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      resolve(products.find((product) => product.id === id));
    }, 500);
  });
};
