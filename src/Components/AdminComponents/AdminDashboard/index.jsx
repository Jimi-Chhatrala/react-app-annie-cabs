import React from "react";
import { FaUser } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

export default function AdminDashBoard() {
  return (
    <div className="bg-[#f3f3f1] p-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="flex justify-between bg-white rounded p-4">
        <div>
          <p className="font-bold">Total User</p>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="flex bg-blue-100 w-16 h-16 rounded-md">
          <FaUser className="w-8 h-8 text-blue-700 m-auto" />
        </div>
      </div>
      <div className="flex justify-between bg-white rounded p-4">
        <div>
          <p className="font-bold">Total Vendor</p>
          <p className="text-2xl font-bold">13</p>
        </div>
        <div className="flex bg-blue-100 w-16 h-16 rounded-md">
          <FaUser className="w-8 h-8 text-blue-700 m-auto" />
        </div>
      </div>
      <div className="flex justify-between bg-white rounded p-4">
        <div>
          <p className="font-bold">Pending Verification</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="flex bg-blue-100 w-16 h-16 rounded-md">
          <MdVerifiedUser className="w-8 h-8 text-blue-700 m-auto" />
        </div>
      </div>
    </div>
  );
}
