import React from "react";

export default function VendorDetails() {
  return (
    <div className="bg-[#f3f3f1] p-4 w-full flex flex-col gap-4 lg:flex-row">
      <div className="w-full lg:w-2/5 space-y-4">
        <div className="bg-blue-100 p-3">
          <h1 className="font-bold">Personal Information</h1>
        </div>
        <div className="bg-white p-3 space-y-2">
          <div class="flex w-full justify-center items-end">
            <img
              class="w-20 h-20  rounded-full"
              src={require("../../../images/user.jpg")}
            />
          </div>
          <div>
            <p className="text-center font-bold">Vendor Vendor</p>
          </div>
          <div>
            <p className="text-gray-400">Email</p>
            <p>vendor@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400">Phone</p>
            <p>8787878787</p>
          </div>
          <div>
            <p className="text-gray-400">Birthday</p>
            <p>null</p>
          </div>
          <div>
            <p className="text-gray-400">Address</p>
            <p>null</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 space-y-4">
        <div className="bg-blue-100 p-3">
          <h1 className="font-bold">Contact Details</h1>
        </div>
        <div className="bg-white p-3 space-y-2">
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Account Role</span>
            <span>vendor</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Profile Id</span>
            <span>zdfgadgdhgrhrh34534523535</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Create At</span>
            <span>vendor</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Account Last Login</span>
            <span>vendor</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Aadhar No</span>
            <span>null</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">License No</span>
            <span>null</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">License Expiry Date</span>
            <span>null</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Document Verification</span>
            <span>Document not uploaded</span>
          </div>
          <div className="flex justify-between p-2">
            <span className="text-gray-400">Account Login Status</span>
            <span className="text-green-500">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
