import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "./Botton"
import car from "../images/car.jpg"
import car1 from "../images/car1.jpg"
import car2 from "../images/car2.jpg"
import car3 from "../images/car3.jpg"
import car4 from "../images/car4.jpg"
import car5 from "../images/car5.jpg"
import car6 from "../images/car6.jpg"
import car7 from "../images/car7.jpg"
import car8 from "../images/car8.jpg"

import "swiper/css";
import "swiper/css/pagination";

const Carslist = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const cars = [
    { id: 1, image: car, name: "BMW M4" },
    { id: 2, image: car1, name: "Audi A6" },
    { id: 3, image: car2, name: "Mercedes C-Class" },
    { id: 4, image: car3, name: "Toyota Fortuner" },
    { id: 5, image: car4, name: "Hyundai Creta" },
    { id: 6, image: car5, name: "Mahindra Thar" },
    { id: 7, image: car6, name: "Kia Seltos" },
    { id: 8, image: car7, name: "Range Rover" },
    { id: 9, image: car8, name: "Porsche 911" },
  ];


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
        {cars.map((carItem) => (
          <SwiperSlide key={carItem.id}>
            <div className="h-[300px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

              {/* Car Image */}
              <img
                src={carItem.image}
                alt={carItem.name}
                className="w-full h-[200px] object-cover"
              />

              {/* Car Info */}
              <div className=" flex flex-col items-center">
                <h3 className="text-lg font-semibold">{carItem.name}</h3>
                <Button onClick={() => navigate("/cars")} name="Book Now"/>
              </div>

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