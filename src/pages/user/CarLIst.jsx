import React from "react";
import car from "../../images/car.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import car4 from "../../images/car4.jpg";
import car5 from "../../images/car5.jpg";
import car6 from "../../images/car6.jpg";
import car7 from "../../images/car7.jpg";
import car8 from "../../images/car8.jpg";

const CarList = () => {

  const cars = [
    { id: 1, image: car, name: "BMW M4", price: "₹8500/day", fuel: "Petrol", transmission: "Automatic", seats: 4 },
    { id: 2, image: car1, name: "Audi A6", price: "₹7000/day", fuel: "Petrol", transmission: "Automatic", seats: 5 },
    { id: 3, image: car2, name: "Mercedes C-Class", price: "₹7500/day", fuel: "Diesel", transmission: "Automatic", seats: 5 },
    { id: 4, image: car3, name: "Toyota Fortuner", price: "₹6500/day", fuel: "Diesel", transmission: "Manual", seats: 7 },
    { id: 5, image: car4, name: "Hyundai Creta", price: "₹4000/day", fuel: "Petrol", transmission: "Automatic", seats: 5 },
    { id: 6, image: car5, name: "Mahindra Thar", price: "₹5000/day", fuel: "Diesel", transmission: "Manual", seats: 4 },
    { id: 7, image: car6, name: "Kia Seltos", price: "₹4200/day", fuel: "Petrol", transmission: "Automatic", seats: 5 },
    { id: 8, image: car7, name: "Range Rover", price: "₹12000/day", fuel: "Petrol", transmission: "Automatic", seats: 5 },
    { id: 9, image: car8, name: "Porsche 911", price: "₹15000/day", fuel: "Petrol", transmission: "Automatic", seats: 2 },
  ];

  return (
    <div className="w-full px-6 lg:px-20 py-12 bg-gray-100">

      <h1 className="text-3xl font-bold text-center mb-10">
        Available Cars
      </h1>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[180px] object-cover"
            />

            {/* Info */}
            <div className="p-4">

              <h2 className="text-lg font-bold mb-2">
                {car.name}
              </h2>

              <p className="text-green-600 font-semibold mb-3">
                {car.price}
              </p>

              {/* Details */}
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.transmission}</span>
                <span>👥 {car.seats}</span>
              </div>

              {/* Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                Book Now
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CarList;