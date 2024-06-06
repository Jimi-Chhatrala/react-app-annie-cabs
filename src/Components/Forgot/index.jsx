import React from "react";
import bgImage from "../../images/Screenshot_2023-10-25_163132-transformed_auto_x2.jpg";

function Forgot() {
  return (
    <div className="sm:p-8 w-full">
      <div
        className="bg-cover rounded-md bg-center w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full rounded-md bg-[#00000036] grid place-items-center h-[500px]">
          <div className="w-full max-w-sm px-3">
            <div className="p-4 w-full rounded-md bg-[#ffffff8c] space-y-8">
              <div className="flex rounded-md w-full bg-white hover:cursor-pointer">
                <div className="w-full bg-[#6EDA48] text-center text-white font-medium p-2 rounded-md">
                  User
                </div>
                <div className="w-full text-center font-medium p-2 rounded-md">
                  Vendor
                </div>
              </div>
              <form autocomplete="off" className="space-y-7">
                <div className="grid">
                  <label className="font-medium text-sm">Mobile No.</label>
                  <input
                    placeholder="Enter your number"
                    className="p-3 text-sm rounded-md border-none focus:border-white"
                    autocomplete="off"
                  />
                </div>
                <input
                  type="submit"
                  className="w-full p-2 text-lg rounded-md font-bold bg-[#6EDA48]"
                  value="Send OTP"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
