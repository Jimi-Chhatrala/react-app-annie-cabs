import React, { useState } from "react";

export default function AdminProfile() {
  const [activeTab, setActiveTab] = useState("personal-details");

  const handleTab = (button) => {
    setActiveTab(button);
  };

  return (
    <>
      <div className="bg-white m-4 rounded">
        <div className="flex justify-center items-center flex-col gap-y-3 p-4">
          <img
            src={require("../../../images/user.jpg")}
            alt=""
            className="w-20 h-20"
          />
          <p className="font-bold">Hello Admin</p>
        </div>
      </div>
      <div className="m-4 flex flex-col md:flex-row gap-2">
        <button
          className={` ${
            activeTab === "personal-details" ? "bg-blue-950 text-white" : ""
          } px-4 py-2 rounded`}
          onClick={() => handleTab("personal-details")}
        >
          Personal Details
        </button>
        <button
          className={`${
            activeTab === "change-password" ? "bg-blue-950 text-white" : ""
          } px-4 py-2 rounded`}
          onClick={() => handleTab("change-password")}
        >
          Change Password
        </button>
      </div>
      {/* Personal Details Start */}

      {activeTab === "personal-details" && (
        <div className="bg-white m-4 p-4 space-y-5">
          <p className="font-bold">Personal Details</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" className="border p-1" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" className="border p-1" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email_address">Email Address</label>
              <input type="email" id="email_address" className="border p-1" />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button className="bg-blue-500 px-4 py-2 rounded text-white">
              Update
            </button>
          </div>
        </div>
      )}
      {/* Personal Details End */}

      {/* Change Password Start*/}

      {activeTab === "change-password" && (
        <div className="bg-white m-4 p-4 space-y-5">
          <p className="font-bold">Change Password</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="old_password">Old Password</label>
              <input type="password" id="old_password" className="border p-1" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="new_password">New Password</label>
              <input type="password" id="new_password" className="border p-1" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="confirm_new_password">Confirm New Password</label>
              <input
                type="password"
                id="confirm_new_password"
                className="border p-1"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button className="bg-blue-500 px-4 py-2 rounded text-white">
              Update
            </button>
          </div>
        </div>
      )}

      {/* Change Password End*/}
    </>
  );
}
