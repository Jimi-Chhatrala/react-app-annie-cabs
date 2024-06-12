import React from "react";

function RideBook() {
  return (
    <div>
      <div className="p-8">
        <div className="flex items-center text-2xl font-semibold">
          ahmedabad
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 256 256"
            className="mx-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
          </svg>
          vadodara
        </div>
        <div className="flex items-center text-lg font-medium">
          2024-06-12 | 18:00
        </div>
        <div className="flex items-center text-lg font-medium">Price: ₹100</div>
        <div className="flex items-center text-lg font-medium">
          Available Seat: 3
        </div>
        <div className="p-4 border-t-2 border-gray-500 my-2">
          <div className="my-2 underline underline-offset-2">
            Total Inquiry 1
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right bg-[#f3f3f1]">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3 border border-black">
                    Index
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    profile
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    firstName
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    lastName
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    email
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    Phone number
                  </th>
                  <th scope="col" className="px-6 py-3 border border-black">
                    Chat
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#f2f2f1] border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 border border-black py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4 border border-black">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={require("../../images/user.jpg")}
                    />
                  </td>
                  <td className="px-6 py-4 border border-black">user</td>
                  <td className="px-6 py-4 border border-black">user</td>
                  <td className="px-6 py-4 border border-black">
                    user@gmail.com
                  </td>
                  <td className="px-6 py-4 border border-black">9898989898</td>
                  <td className="px-6 py-4 border border-black">
                    <button className="bg-green-600 py-1 px-4 rounded-md text-white font-medium">
                      Chat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RideBook;
