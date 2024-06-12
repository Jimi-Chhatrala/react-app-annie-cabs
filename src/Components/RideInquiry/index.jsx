import React from "react";

function RideInquiry() {
  return (
    <div className="w-full max-w-6xl mx-auto md:p-10">
      <div className="text-xl justify-center sm:justify-normal flex items-center font-bold p-4">
        <div className="flax items-center">
          Total Ride Inquiry : <span className="text-slate-300">1</span>
        </div>
      </div>
      <div className="h-[2px] bg-slate-300"></div>
      <div className="my-6 md:p-4 flex flex-wrap justify-center w-full">
        <div className="border-2 rounded-lg shadow-lg w-full max-w-md m-4">
          <div className="p-4 grid">
            <div className="text-right text-[#726d6d] text-sm font-medium">
              2024-06-12 | 18:00
            </div>
            <div className="flex items-center">
              <div className="w-full max-w-max">
                <img
                  className="w-16 h-16 rounded-full object-cover object-center mx-auto"
                  src={require("../../images/mss.jpg")}
                />
                <h2 className="text-center">swift</h2>
              </div>
              <div className="w-full grid justify-center space-y-2">
                <h2 className="text-xl font-bold flex items-center">
                  {" "}
                  vendor vendor
                </h2>
                <h2 className="font-semibold flex items-center">8787878787</h2>
              </div>
              <div className="w-full max-w-max">
                <button className="bg-green-600 px-4 py-1 rounded-md text-white">
                  Chat
                </button>
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

export default RideInquiry;
