import React, { useState } from "react";
import sampleCar from "../../images/car.jpg";

const Payment = () => {

  const [paymentMethod, setPaymentMethod] = useState("online");

  const carData = {
    name: "Kia K3",
    type: "Compact car",
    seats: 5,
    bags: 2,
    transmission: "Auto",
    price: 1719,
    total: 8599,
    image: sampleCar
  };

  const advanceCOD = 1000;

  return (
    <div className="bg-gray-100 min-h-screen px-6 lg:px-20 py-10">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
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

              <div className="flex gap-6 text-sm text-gray-700 mt-2">
                <span>👤 {carData.seats} seats</span>
                <span>🧳 {carData.bags} suitcase</span>
                <span>⚙ {carData.transmission}</span>
              </div>

              <p className="text-green-600 font-semibold mt-3">
                ₹{carData.price} / day
              </p>

            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="mt-10 border-t pt-6">

            <h3 className="text-lg font-semibold mb-4">
              Select Payment Method
            </h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3 border p-3 rounded cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Online Payment
              </label>

              <label className="flex items-center gap-3 border p-3 rounded cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery (₹1000 Advance Required)
              </label>

            </div>

          </div>

          {/* PAYMENT DESCRIPTION */}
          <div className="mt-8 bg-gray-50 p-4 rounded text-sm text-gray-700">

            <h4 className="font-semibold mb-2">
              Payment Policy
            </h4>

            <p>
              • If you select <b>Cash on Delivery</b>, you must pay ₹1000 in advance to confirm the booking.
            </p>

            <p>
              • If you cancel the booking before pickup time, the advance amount will be refunded.
            </p>

            <p>
              • If you choose <b>Online Payment</b> and do not pick up the vehicle, the company will charge 50% of the booking amount.
            </p>

            <p>
              • If you choose <b>Cash on Delivery</b> and do not arrive for pickup, the ₹1000 advance will not be refunded.
            </p>

          </div>

        </div>

        {/* PAYMENT SUMMARY */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">

          <h3 className="text-lg font-semibold mb-4">
            Payment Summary
          </h3>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Total Price</span>
              <span>₹{carData.total}</span>
            </div>

            {paymentMethod === "cod" && (
              <div className="flex justify-between text-orange-600">
                <span>Advance (COD)</span>
                <span>₹{advanceCOD}</span>
              </div>
            )}

          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Confirm Payment
          </button>

        </div>

      </div>

    </div>
  );
};

export default Payment;