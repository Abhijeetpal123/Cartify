// import { useEffect } from "react";
// import { getData } from "../Context/DataContext";

// export const Category = ({setActiveCategory}) => {
//   const { data, fetchAllProduct } = getData();
//   const getUniqueCategory = (data, property) => {
//     let newVal = data?.map((currElem) => {
//       return currElem.category;
//     });
//     newVal = [...new Set(newVal)];
//     return newVal;
//   };
//   const categoryOnlyData = getUniqueCategory(data, "category");
//   console.log(categoryOnlyData);
//   useEffect(() => {
//     fetchAllProduct();
//   }, []);
//   return (
//     <div className="px-4 py-6 mx-auto max-w-6xl ">
//         <h2 className="text-xl  font-bold mb-4 "> Shop by Category </h2>
//       <div className="flex gap-4 overflow-x-auto scrollbar-hide">
//         {categoryOnlyData?.map((item, index) => {
//           return (
//             <div key={index}>
//               <button onClick={()=>setActiveCategory(item)}
//               className="shrink-0 px-5 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition duration-300">{item}</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// Manually Define
import { useState } from "react";
export const Category = ({activeCategory, setActiveCategory}) => {
  // const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelery", value: "jewelery" },
  ];

  const categoriesMap = {
    electronics: "Electronics",
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
    jewelery: "Jewelery",
    bestseller: "Bestsellers",
    newrelease: "New Releases",
    "home&kitchen": "Home & Kitchen ",
  };
  // console.log(categories)
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Heading  */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 ">
        Shop by Category
      </h2>
      {/* Category Button  */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {categories.map((item, index) => {
          return (
            <button
            onClick={()=>{
              setActiveCategory(item.value)
            }}
              key={index}
              className={` cursor-pointer shrink-0 px-5 py-2 rounded-full  text-sm font-medium transition duration-300 ${activeCategory === item.value? "bg-red-50 text-red-500 font-semibold shadow-md" : "hover:bg-gray-100 text-gray-600 "}`}
            >
              {categoriesMap[item.value] || item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
