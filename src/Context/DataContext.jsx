import axios from "axios";
import { children, createContext, useCallback, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // Fetching all Products from api
  const fetchAllProduct = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products?limit=200",
      );
      // console.log(res);
      const productData = res.data;
      setData(productData);
    } catch (error) {
      console.log(error);
    }
  },[]) 
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProduct }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
