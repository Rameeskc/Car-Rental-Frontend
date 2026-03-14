import React from "react";
import sampleCar from "../../images/car.jpg";

const Checkout = () => {

  const carData = {
    name: "Kia K3",
    type: "Compact car",
    seats: 5,
    doors: 4,
    bags: 2,
    transmission: "Auto",
    price: "₹1,719 / day",
    total: "₹8,599",
    image: sampleCar
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 lg:px-20 py-10">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">

          {/* Car Info */}
          <div className="flex flex-col md:flex-row gap-6">

            <img
              src={carData.image}
              alt="car"
              className="w-full md:w-[260px] h-[180px] object-cover rounded"
            />

            <div>
              <p className="text-gray-500 text-sm">{carData.type}</p>

              <h2 className="text-2xl font-bold">
                {carData.name}
              </h2>

              <p className="text-gray-500 mb-4">
                or similar
              </p>

              <div className="flex gap-6 text-sm text-gray-700">
                <span>👤 {carData.seats} seats</span>
                <span>🧳 {carData.bags} suitcase</span>
                <span>❄ A/C</span>
                <span>⚙ {carData.transmission}</span>
              </div>

              <p className="mt-3 text-sm">
                ⭐ 4.6 (165 reviews)
              </p>

            </div>

          </div>

          {/* FEATURES */}
          <div className="mt-6 text-sm text-gray-700 space-y-2">
            <p>✔ Free cancellation (24 hours before pick-up)</p>
            <p>✔ 24 Hours confirmation</p>
            <p>✔ Level to Level fuel policy</p>
            <p>✔ Unlimited mileage</p>
          </div>

          {/* PACKAGE */}
          <div className="mt-8 border-t pt-6">

            <h3 className="font-semibold text-lg mb-4">
              Select package
            </h3>

            <div className="border p-4 rounded-lg">

              <h4 className="font-semibold">
                Basic
              </h4>

              <p className="text-green-600 font-bold text-lg">
                {carData.price}
              </p>

              <p className="text-sm text-gray-500">
                Minimum protection included
              </p>

              <p className="text-sm mt-2">
                Collision Damage Waiver
              </p>

              <p className="text-sm">
                Excess ₹300,000
              </p>

            </div>

          </div>

        </div>

        {/* PAYMENT SUMMARY */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">

          <h3 className="text-lg font-semibold mb-4">
            Payment details
          </h3>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{carData.total}</span>
            </div>

            <div className="flex justify-between">
              <span>Sale (10%)</span>
              <span className="text-green-600">-₹955</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>{carData.total}</span>
            </div>

          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;