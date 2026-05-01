import { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import { FilterSection } from "../Components/FilterSection";
import { ProductCard } from "../Components/ProductCard";
import { Category } from "../Components/Category";
import { Shimmer } from "../Components/Shimmer";

export const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [priceFilter, setPriceFilter] = useState("all");
  
  const[loading,setLoading]=useState(true)
  console.log("loading:", loading);

  // console.log(priceFilter)
  const [activeCategory, setActiveCategory] = useState("all");
  const { data, fetchAllProduct } = getData();
  // console.log("DATA:", data);

  // Category + Price Filter Combined
  const filterProducts =
    data?.filter((item) => {
      if (activeCategory === "all") return true;
      return (
        item.category.toLowerCase().trim() ===
        activeCategory.toLowerCase().trim()
      );
    }) || [];
  useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    await fetchAllProduct()
    setLoading(false)
  };
  fetchData();
}, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-white  p-5  rounded-2xl border  shadow-lg border-gray-100">
        <h2 className=" text-lg font-semibold mb-4 text-gray-800 tracking-wide">
          Filters
        </h2>
        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-6">Category</h3>
          <FilterSection
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        {/* PRICE */}

        <hr className="my-4 border-gray-200" />
        <div>
          <h3 className="font-semibold mb-2 ">Price</h3>
          <select className="w-full border p-2 rounded">
            <option>All</option>
            <option>Under $50</option>
            <option>Under $100</option>
            <option>Under $200</option>
          </select>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-3/4">
        {/* SORT */}
        <div className="flex justify-end mb-4 ">
          <select className="border p-2 rounded">
            <option>Sort By </option>
            <option>Price low High</option>
            <option>Price High to Low </option>
          </select>
        </div>

        <div>
       {loading ? (
  <Shimmer count={12} />
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-8">
    {filterProducts.length > 0 ? (
      filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <p>No products found</p>
    )}
  </div>
)}
        </div>
      </div>
    </div>
  );
};
