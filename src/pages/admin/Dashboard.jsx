import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Total Cars</h2>
          <p className="text-2xl font-bold mt-2">24</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Bookings</h2>
          <p className="text-2xl font-bold mt-2">56</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Users</h2>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>

      </div>

      {/* Table / Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-3">Recent Bookings</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">User</th>
              <th>Car</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">Rahul</td>
              <td>Kia K3</td>
              <td className="text-green-600">Completed</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Arun</td>
              <td>Hyundai i20</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;