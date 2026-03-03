import React, { useState } from "react";
import Botton from "./Botton";

const locations = [
  "Kochi",
  "Calicut",
  "Trivandrum",
  "Bangalore",
  "Chennai",
  "Mumbai",
  "Delhi"
];

const BookingArea = () => {
  const [pickupQuery, setPickupQuery] = useState("");
  const [dropQuery, setDropQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="w-full max-w-[520px] bg-white rounded-2xl p-5 lg:p-6 shadow-2xl relative">

      {/* Heading */}
      <div className="mb-6 text-center lg:text-left">
        <h1 className="text-sm lg:text-lg">
          Are You Looking For Rental Cars In Kozhikode?
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold mt-2">
          Book Self-Drive Cars Rentals
        </h2>
      </div>

      {/* Pickup Location */}
      <div className="relative mb-4">
        <input
          type="search"
          value={pickupQuery}
          onChange={(e) => {
            setPickupQuery(e.target.value);
            setActiveDropdown("pickup");
          }}
          onFocus={() => setActiveDropdown("pickup")}
          placeholder="Pickup Location"
          className="w-full border border-gray-400 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {activeDropdown === "pickup" && pickupQuery && (
          <Dropdown
            query={pickupQuery}
            setQuery={setPickupQuery}
            setActiveDropdown={setActiveDropdown}
          />
        )}
      </div>

      {/* Drop-off Location */}
      <div className="relative mb-4">
        <input
          type="search"
          value={dropQuery}
          onChange={(e) => {
            setDropQuery(e.target.value);
            setActiveDropdown("drop");
          }}
          onFocus={() => setActiveDropdown("drop")}
          placeholder="Drop-off Location"
          className="w-full border border-gray-400 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {activeDropdown === "drop" && dropQuery && (
          <Dropdown
            query={dropQuery}
            setQuery={setDropQuery}
            setActiveDropdown={setActiveDropdown}
          />
        )}
      </div>

      {/* Dates Section */}
      <div className="flex flex-col lg:flex-row gap-3 mb-4">
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full lg:w-1/2 border border-gray-400 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full lg:w-1/2 border border-gray-400 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Button */}
      <div className="mt-4 flex w-full items-center justify-center">
        <Botton className="mx-auto w-full lg:w-1/2" name="Search Cars"/>
      </div>
    </div>
  );
};

/* Dropdown Component */
const Dropdown = ({ query, setQuery, setActiveDropdown }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-50">
      {locations
        .filter((location) =>
          location.toLowerCase().includes(query.toLowerCase())
        )
        .map((location, index) => (
          <div
            key={index}
            onClick={() => {
              setQuery(location);
              setActiveDropdown(null);
            }}
            className="px-3 py-2 cursor-pointer hover:bg-green-100"
          >
            {location}
          </div>
        ))}
    </div>
  );
};

export default BookingArea;