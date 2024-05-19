import { useEffect, useState } from "react";

export const useFetchData = (product,limit=10) => {
  const [result, setResult] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (product) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalstorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = `https://fakestoreapi.com/products?limit=${limit}`;

    setIsLoading(true);

    if (product) {
      url = `https://fakestoreapi.com/products/${product}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (product) {
          //Country page
          setResult(data[0]);
        } else {
          //Homepage
          setResult(data);
          setFilteredProducts(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalstorage = () => {
    const data = JSON.parse(localStorage.getItem("products"));

    if (data) {
      setResult(data);
      setFilteredProducts(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    result,
    filteredProducts,
    setFilteredProducts,
    isLoading,
    isError,
  };
};
