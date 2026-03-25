import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Sample Car",
    price: "1000",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated:", id, form);
    navigate("/admin/cars");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">Edit Car</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          value={form.name}
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          value={form.price}
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Update Car
        </button>

      </form>
    </div>
  );
};

export default EditCar;