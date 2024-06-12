import React from "react";

function VendorRideInquiry() {
  return (
    <div className="w-full max-w-6xl mx-auto md:p-10">
      <div className="text-xl justify-center sm:justify-normal flex items-center font-bold p-4">
        <div className="flax items-center">
          Total Your Ride: <span className="text-slate-300">1</span>
        </div>
      </div>
      <div className="h-[2px] bg-slate-300"></div>
      <div className="flex">
        <div className="w-full border p-2 flex justify-center bg-green-500 text-white  font-medium">
          Upcoming Ride
        </div>
        <div className="w-full border p-2 flex justify-center bg-gray-200  font-medium">
          Completed Ride
        </div>
      </div>
      <div className="my-6 md:p-4 flex flex-wrap justify-center w-full">
        <div className="border-2 rounded-lg shadow-lg w-full max-w-md m-4">
          <div className="p-4 grid">
            <div className="text-right text-[#726d6d] text-sm font-medium">
              2024-06-12 | 18:00
            </div>
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={require("../../images/mss.jpg")}
              />
              <div className="grid">
                <h2 className="text-lg w-full px-10 font-semibold">swift</h2>
                <h2 className="text-sm w-full px-10 font-medium">GJ01MS1234</h2>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-slate-200"></div>
          <div className="p-4 flex w-full">
            <div className="w-full gird text-center">
              <div className="text-[#726d6d]">FROM</div>
              <div className="font-medium">ahmedabad</div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className="text-5xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
            </svg>
            <div className="w-full gird text-center">
              <div className="text-[#726d6d]">TO</div>
              <div className="font-medium">vadodara</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorRideInquiry;
