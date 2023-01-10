import { useEffect, useState } from "react";

const useMakeRequest = (method, url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const dBProduct = await method(url);
        setProducts(dBProduct.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    products.length === 0 && getProducts();
  }, []);
  return [products, error];
};

export default useMakeRequest;
