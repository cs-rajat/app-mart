import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios("/appData.json")
      .then((data) => {
       
        setTimeout(() => {
          setProducts(data.data);
          setLoading(false);
        }, 300); 
      })
      .catch((err) => {
        setTimeout(() => {
          setError(err);
          setLoading(false);
        }, 300); 
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;
