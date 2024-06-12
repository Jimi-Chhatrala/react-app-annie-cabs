import React from "react";
import { useNavigate } from "react-router-dom";

function CabSearch() {
  const navigate = useNavigate();
  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl py-6 font-semibold">Wed Jun 12 2024</h1>
        <div className="text-[#A7A4A4]">
          <div className="flex items-center space-x-4">
            <span>ahmedabad</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
            </svg>
            <span>vadodara</span>
          </div>
          <div>1 Rides Available</div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="p-5">
          <div className="bg-[#F2F2F2] flex rounded-lg">
            <div className="flex w-full p-2">
              <img
                className="w-full max-w-[200px] h-36 object-contain object-center rounded-lg lg:ml-8"
                src={require("../../images/mss.jpg")}
              />
              <div className="flex w-full justify-between items-center">
                <div className="flex w-full md:max-w-[400px] lg:max-w-[350px] justify-between mx-auto px-10">
                  <div className="flex-row">
                    <div className="font-medium text-lg">swift</div>
                    <span className="text-sm">vendor</span>
                  </div>
                  <div className="flex-row">
                    <div className="font-medium text-lg">18:00</div>
                    <span className="text-sm">ahmedabad</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4px] my-6 bg-[#726d6d]"></div>
            <div className="w-full max-w-max space-y-9 px-5 border-slate-400 flex">
              <div className="grid place-items-center w-full py-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="font-medium text-center text-xl">₹100</div>
                    <button
                      className="bg-[#6EDA48]  w-full max-w-[100px] p-2 mx-auto rounded-lg text-sm font-semibold"
                      onClick={() => navigate("/ride_details")}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="text-center text-[#b9aeae]">
                    3 Seat Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabSearch;
