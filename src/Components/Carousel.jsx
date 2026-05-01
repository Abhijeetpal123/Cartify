import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Category } from "./Category";

export const Carousel = () => {
  const { data, fetchAllProduct } = useContext(DataContext);
  // console.log(data);
  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        // spaceBetween={50}
        loop={true}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.slice(0, 5)?.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                key={index}
                className=" max-w-6xl mx-auto bg-linear-to-r from-[#0f172a] via-[#1e293b] to-[#020617] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.02]  text-white "
              >
                <div className="flex flex-col md:flex-row  justify-between   items-center px-10 py-12 gap-10">
                  {/* Left Content */}
                  <div className="space-y-5 max-w-lg ">
                    <h3 className="text-red-500 text-sm font-semibold  uppercase">
                      Trending Project
                    </h3>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
                      {item.title}
                    </h1>
                    <p className="text-gray-300 line-clamp-1">
                      {item.description}
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 px-7 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                  {/* Right Image  */}
                  <div className="w-full md:w-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[350px] md:w-[450px] h-[300px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Category/>
    </div>
  );
};
