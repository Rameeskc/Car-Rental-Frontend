import React from "react";
import car from "../../images/car.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import car4 from "../../images/car4.jpg";
import car5 from "../../images/car5.jpg";

const CarList = () => {

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
      total: "₹47,817.96"
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
      total: "₹82,670.73"
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
      total: "₹130,000"
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
      total: "₹104,000"
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
      total: "₹68,000"
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
      total: "₹78,000"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 lg:px-20 py-10">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* FILTER SIDEBAR */}
        <div className="lg:w-[260px] bg-white p-6 rounded-lg shadow-md h-fit">

          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Transmission */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Transmission</p>

            <div className="flex flex-col gap-2 text-sm">
              <label><input type="radio" name="t"/> Automatic</label>
              <label><input type="radio" name="t"/> Manual</label>
              <label><input type="radio" name="t"/> Both</label>
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Vehicle Type</p>

            <div className="flex flex-col gap-2 text-sm">
              <label><input type="checkbox"/> Car</label>
              <label><input type="checkbox"/> Vans & Trucks</label>
              <label><input type="checkbox"/> Premium</label>
            </div>
          </div>

          {/* Seats */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Seats</p>

            <div className="flex flex-col gap-2 text-sm">
              <label><input type="checkbox"/> 2+</label>
              <label><input type="checkbox"/> 4+</label>
              <label><input type="checkbox"/> 5+</label>
              <label><input type="checkbox"/> 7+</label>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="font-semibold mb-2">Price Range</p>

            <input
              type="number"
              placeholder="Min price"
              className="border p-2 w-full mb-2"
            />

            <input
              type="number"
              placeholder="Max price"
              className="border p-2 w-full"
            />
          </div>

        </div>

        {/* CAR LIST */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {cars.map((car) => (

            <div key={car.id} className="bg-white rounded-lg shadow-md p-4">

              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[160px] object-cover rounded"
              />

              <h2 className="font-bold mt-3">{car.name}</h2>

              <p className="text-sm text-gray-500 mb-3">
                OR SIMILAR {car.type}
              </p>

              {/* specs */}
              <div className="flex justify-between text-sm mb-3">

                <span>👤 {car.seats}</span>
                <span>🚪 {car.doors}</span>
                <span>🧳 {car.bags}</span>
                <span>{car.transmission}</span>

              </div>

              <p className="text-sm">{car.mileage}</p>
              <p className="text-sm text-green-600">
                Unlimited mileage
              </p>

              <p className="text-sm mb-3">
                Basic protection included
              </p>

              <button className="text-green-600 text-sm mb-3">
                More details
              </button>

              <p className="text-xs text-gray-500">
                PAY AT BRANCH
              </p>

              <p className="text-lg font-bold">
                {car.price} / day
              </p>

              <p className="text-sm mb-3">
                TOTAL {car.total}
              </p>

              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Select
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default CarList;