import React from "react";

export default function AdminRideDetails() {
  return (
    <>
      <div className="bg-[#f3f3f1] p-4 w-full flex flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-2/5 space-y-4">
          <div className="bg-blue-100 p-3">
            <h1 className="font-bold">Ride Information</h1>
          </div>
          <div className="bg-white p-3 space-y-2">
            <div class="flex w-full justify-center items-end">
              <img
                class="w-20 h-20  rounded-full"
                src={require("../../../images/mss.jpg")}
              />
            </div>
            {/* <div>
            <p className="text-center font-bold">Vendor Vendor</p>
          </div> */}
            <div>
              <p className="text-gray-400">Ride Id</p>
              <p>e9r8g76xcv546d8g6f5g465g4d</p>
            </div>
            <div className="grid grid-cols-2 gap-y-3">
              <div>
                <p className="text-gray-400">Pick-up Location</p>
                <p>Ahmedabad</p>
              </div>
              <div>
                <p className="text-gray-400">Drop Location</p>
                <p>Vadodara</p>
              </div>
              <div>
                <p className="text-gray-400">Date</p>
                <p>2024-06-12</p>
              </div>
              <div>
                <p className="text-gray-400">Time</p>
                <p>18:00</p>
              </div>
              <div>
                <p className="text-gray-400">Price</p>
                <p>100</p>
              </div>
              <div>
                <p className="text-gray-400">Available Seats</p>
                <p>3</p>
              </div>
            </div>
            <div>
              <button className="w-full bg-red-500 text-white px-4 py-2 rounded mt-2">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 space-y-4">
          <div className="bg-blue-100 p-3">
            <h1 className="font-bold">Vendor Details</h1>
          </div>
          <div className="bg-white p-3 space-y-3">
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Vehicle Number</span>
              <span>GJ01MS1234</span>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Vehicle Name</span>
              <span>Swift Maruti Suzuki</span>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Vendor Id</span>
              <span>ea98rt4g6df5v1s6d5f46sd54f6</span>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Vendor Name</span>
              <span>vendor vendor</span>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Account Email</span>
              <span>vendor@gmail.com</span>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <span className="text-gray-400">Phone Number</span>
              <span>8787878787</span>
            </div>
            {/* <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">License Expiry Date</span>
            <span>null</span>
          </div>
          <div className="flex justify-between border-b-2 p-2">
            <span className="text-gray-400">Document Verification</span>
            <span>Document not uploaded</span>
          </div> */}
            <div className="flex justify-between p-2">
              <span className="text-gray-400">Account Login Status</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div class="p-4 border-2 border-gray-500 my-2">
          <div className="border-2 border-gray-500">
            <p className="font-semibold text-2xl text-center p-2">
              User Booking
            </p>
          </div>
          <div class="my-2 underline underline-offset-2">Total Inquiry 1</div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right bg-[#f3f3f1]">
              <thead class="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3 border border-black">
                    Index
                  </th>
                  <th scope="col" class="px-6 py-3 border border-black">
                    profile
                  </th>
                  <th scope="col" class="px-6 py-3 border border-black">
                    firstName
                  </th>
                  <th scope="col" class="px-6 py-3 border border-black">
                    lastName
                  </th>
                  <th scope="col" class="px-6 py-3 border border-black">
                    email
                  </th>
                  <th scope="col" class="px-6 py-3 border border-black">
                    Phone number
                  </th>
                  {/* <th scope="col" class="px-6 py-3 border border-black">
                    Chat
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr class="bg-[#f2f2f1] border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 border border-black py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 border border-black">
                    <img
                      class="w-12 h-12 rounded-full"
                      src={require("../../../images/user.jpg")}
                    />
                  </td>
                  <td class="px-6 py-4 border border-black">user</td>
                  <td class="px-6 py-4 border border-black">user</td>
                  <td class="px-6 py-4 border border-black">user@gmail.com</td>
                  <td class="px-6 py-4 border border-black">9898989898</td>
                  {/* <td class="px-6 py-4 border border-black">
                    <button class="bg-green-600 py-1 px-4 rounded-md text-white font-medium">
                      Chat
                    </button>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
