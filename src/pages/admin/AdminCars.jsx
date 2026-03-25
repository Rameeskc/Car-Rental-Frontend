import React from "react";
import { useNavigate } from "react-router-dom";

import car from "../../images/car.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import car4 from "../../images/car4.jpg";
import car5 from "../../images/car5.jpg";

const AdminCars = () => {
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      image: car,
      name: "VOLKSWAGEN POLO",
      type: "Economy",
      seats: 4,
      doors: 5,
      bags: 1,
      transmission: "Manual",
      mileage: "22 km/l",
      price: "₹2,390.90",
    },
    {
      id: 2,
      image: car1,
      name: "HYUNDAI TUCSON",
      type: "Intermediate",
      seats: 5,
      doors: 5,
      bags: 3,
      transmission: "Automatic",
      mileage: "22 km/l",
      price: "₹4,133.54",
    },
    {
      id: 3,
      image: car2,
      name: "BMW M4",
      type: "Premium",
      seats: 4,
      doors: 2,
      bags: 2,
      transmission: "Automatic",
      mileage: "18 km/l",
      price: "₹6,500",
    },
    {
      id: 4,
      image: car3,
      name: "TOYOTA FORTUNER",
      type: "SUV",
      seats: 7,
      doors: 5,
      bags: 4,
      transmission: "Manual",
      mileage: "15 km/l",
      price: "₹5,200",
    },
    {
      id: 5,
      image: car4,
      name: "HYUNDAI CRETA",
      type: "SUV",
      seats: 5,
      doors: 5,
      bags: 3,
      transmission: "Automatic",
      mileage: "19 km/l",
      price: "₹3,400",
    },
    {
      id: 6,
      image: car5,
      name: "MAHINDRA THAR",
      type: "Off Road",
      seats: 4,
      doors: 3,
      bags: 2,
      transmission: "Manual",
      mileage: "16 km/l",
      price: "₹3,900",
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 lg:px-10 py-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cars Management</h1>

        <button
          onClick={() => navigate("/admin/cars/add")}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          + Add New Car
        </button>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md p-4">

            {/* Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[160px] object-cover rounded"
            />

            {/* Title */}
            <h2 className="font-bold mt-3">{car.name}</h2>
            <p className="text-sm text-gray-500 mb-3">
              {car.type}
            </p>

            {/* Specs */}
            <div className="flex justify-between text-sm mb-3">
              <span>👤 {car.seats}</span>
              <span>🚪 {car.doors}</span>
              <span>🧳 {car.bags}</span>
              <span>{car.transmission}</span>
            </div>

            {/* Extra */}
            <p className="text-sm">{car.mileage}</p>

            {/* Price */}
            <p className="text-lg font-bold mt-2">
              {car.price} / day
            </p>

            {/* Admin Buttons */}
            <div className="flex gap-2 mt-4">

              <button
                onClick={() =>
                  navigate(`/admin/cars/edit/${car.id}`)
                }
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminCars;