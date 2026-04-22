import { Link, NavLink } from "react-router-dom";
import { StrictMode, useState } from "react";
import { CarTaxiFront, MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { FaBagShopping, FaBasketShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { SignInButton, SignUpButton, UserButton,Show } from "@clerk/react";
import { CgClose } from "react-icons/cg";

export const Navbar = ({location ,getLocation,openDropdown,setOpenDropdown}) => {
   
    const toggleDropdown =()=>{
        setOpenDropdown(!openDropdown)
    }

 
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className=" max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex gap-7 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold text-lg shadow-md group-hover:scale-105 transition duration-200">
              C
            </div>

            {/* Text */}
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              <span className="font-bold">Cart</span>
              <span className="text-gray-500">ify</span>
            </h1>
          </Link>
          <div className="flex gap-1 items-center cursor-pointer text-gray-700 ">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className="-space-y-1">
                <p>{location.city}</p>
                <p>{location.state}</p>
                {/* <p>{location.postcode}</p>
                <p>{location.country}</p> */}
              </div> : "Add Adddress"}
            </span>
            <FaCaretDown onClick={toggleDropdown}/>
          </div>
          {
            openDropdown?<div className="w-62.5 h-max shadow-2xl Z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100  rounded-md ">
                <h1 className="font-semibold mb-4 text-xl flex justify-between ">Change Location <span className="cursor-pointer" onClick={toggleDropdown}>
                    <CgClose/>
                    </span>
                </h1>
                <button onClick={getLocation} className="bg-red-600  cursor-pointer text-white px-3 py-1 rounded-md hover:bg-red-500">
                    Detect my Location
                    </button>
            </div>:null
          }
        </div>
        {/* Menu Section  */}
        <nav className="flex gap-9 items-center ">
          <ul className="flex justify-between items-center text-xl font-semibold gap-7">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
              }
            >
              <li> Home </li>
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500  transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Cart</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500  transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500  transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
          <header>
        <Show when="signed-out">
          <SignInButton  className="bg-red-500  text-white px-3 py-1 rounded-md cursor-pointer"/>
          {/* <SignUpButton /> */}
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
          </div>
        </nav>
      </div>
    </div>
  );
};
