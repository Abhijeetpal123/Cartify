import { useState } from "react";

export const FilterSection = ({ activeCategory, setActiveCategory }) => {
  //  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelery", value: "jewelery" },
  ];
  // console.log(activeCategory)

  return (
    <div className="px-4 py-6 ">
      <h2 className="font-bold mb-4 text-xl "> Shop by Category </h2>
      <div className="flex flex-col gap-2 ">
        {categories?.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(item.value);
              }}
              className={` cursor-pointer w-full px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex justify-between items-center ${item.value === activeCategory ? "bg-red-50 text-red-500 font-semibold" : " text-gray-600 hover:bg-gray-100"}`}
            >
              <span>{item.label}</span>
               <span
          className={`h-2 w-2 rounded-full ${
            activeCategory === item.value
              ? "bg-red-500"
              : "bg-gray-300"
          }`}
        ></span>
            
            </button>
            
          );
        })}
        {/* <div>
          <label>
            Filter by Price:
          </label>
          <select>
            <option>All</option>
            <option>Under $50</option>
            <option>Under $100</option>
            <option>Under $200</option>

          </select>
        </div> */}
      </div>
    </div>
  );
};
