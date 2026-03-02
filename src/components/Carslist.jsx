import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const Carslist = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <div className="w-full py-10 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          // If last slide → stop autoplay
          if (swiper.isEnd) {
            swiper.autoplay.stop();
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {/* Normal Cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((car) => (
          <SwiperSlide key={car}>
            <div className="h-[300px] bg-amber-200 rounded-xl flex items-center justify-center text-xl font-semibold">
              Car {car}
            </div>
          </SwiperSlide>
        ))}

        {/* Last Special Card */}
        <SwiperSlide>
          <div className="h-[300px] bg-green-600 text-white rounded-xl flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">View More Cars</h2>
            <button
              onClick={() => navigate("/cars")}
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carslist;