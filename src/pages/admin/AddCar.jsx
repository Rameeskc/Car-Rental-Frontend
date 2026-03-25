import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type: "",
    seats: "",
    doors: "",
    bags: "",
    transmission: "",
    mileage: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/admin/cars");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-6">Add New Car</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Type */}
        <input
          type="text"
          name="type"
          placeholder="Type (SUV, Premium...)"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Seats */}
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Doors */}
        <input
          type="number"
          name="doors"
          placeholder="Doors"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Bags */}
        <input
          type="number"
          name="bags"
          placeholder="Bags"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Transmission */}
        <select
          name="transmission"
          className="border p-2 rounded"
          onChange={handleChange}
        >
          <option value="">Select Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        {/* Mileage */}
        <input
          type="text"
          name="mileage"
          placeholder="Mileage (e.g. 22 km/l)"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price per day"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="border p-2 rounded col-span-1 md:col-span-2"
          onChange={handleChange}
        />

        {/* Submit */}
        <button className="col-span-1 md:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Add Car
        </button>

      </form>
    </div>
  );
};

export default AddCar;