import axios from "axios";
import { children, createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  // Fetching all Products from api
  const fetchAllProduct = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?limit=200",
      );
      console.log(res);
      const productData = res.data;
      setData(productData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProduct }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
