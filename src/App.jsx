import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Navbar } from "./Components/Navbar";
import { useEffect } from "react";
import axios from "axios";

function App() {
   const [openDropdown,setOpenDropdown]=useState(false)
  const [location,setLocation]=useState()
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        console.log(location);
        const exactLocation = location.data.address
  setLocation(exactLocation)
  setOpenDropdown(false)
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <Product />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
