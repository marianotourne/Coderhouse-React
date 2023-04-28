const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts()
    .then((response) => {
      setProducts(response);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
