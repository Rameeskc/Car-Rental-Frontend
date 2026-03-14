import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCircleUser } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Subash",
    text: "I had a great experience with Drivo. The booking process was simple and quick, and the car was delivered on time in excellent condition. The pricing was transparent with no hidden charges. I will definitely use Drivo again for my next trip.",
  },
  {
    id: 2,
    name: "Rahul",
    text: "Drivo made my trip completely stress-free. The car was clean and well maintained. Pickup and drop-off were smooth and hassle-free. Highly recommended!",
  },
  {
    id: 3,
    name: "Arjun",
    text: "Excellent service and premium cars. The booking was fast and the support team was very helpful. I will definitely choose Drivo again.",
  },
  {
    id: 4,
    name: "Vikram",
    text: "Very smooth experience from start to finish. The vehicle condition was top-notch and customer service was excellent.",
  },
];

const Review = () => {
  return (
    <div className="w-full py-28 px-4 lg:px-20 bg-gray-50">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Read What Our Customers Have to Say!
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-green-600 rounded-3xl p-10 transition duration-300 flex flex-col min-h-[43o,0px] lg:min-h-[450px]">

              {/* Profile */}
              <div className="flex flex-col items-center gap-4 mb-6">
                <FaCircleUser className="text-8xl text-white" />
                <h3 className="text-2xl font-bold text-white">
                  {review.name}
                </h3>

                {/* Stars */}
                <div className="flex text-yellow-400 text-xl">
                  ★ ★ ★ ★ ★
                </div>
              </div>

              {/* Review Text */}
              <p className="text-white text-base leading-relaxed text-center flex-grow">
                {review.text}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;