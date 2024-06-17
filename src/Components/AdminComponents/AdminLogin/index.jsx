import React from "react";
import bgGif from "../../../images/animation_loh24k7f_small.gif";

export default function AdminLogin() {
  return (
    <div className="w-full h-screen bg-gray-300 grid place-items-center">
      <div
        className="border rotate-180 w-full max-w-xl bg-[#f3f3f1] p-4 rounded-md"
        style={{ boxShadow: "darkslategray 0px 50px 50px -50px" }}
      >
        <div className="w-full my-2 flex">
          <form className="space-y-10 rotate-180 w-full grid p-4">
            <div className="text-xl font-semibold mx-auto">ADMIN LOGIN</div>
            <div className="space-y-6 w-full">
              <input
                name="email"
                className="border-b-2 w-full font-mono border-gray-600 bg-transparent focus:outline-none"
                type="email"
                placeholder="Email"
              />
              <div>
                <input
                  name="password"
                  className="border-b-2 w-full font-mono border-gray-600 bg-transparent focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
                <div className="text-red-500 font-medium text-xs"></div>
              </div>
            </div>
            <div className="w-full">
              <button className="bg-black rounded-md w-full text-white p-1">
                LOGIN
              </button>
            </div>
          </form>
          <div
            className="border-2 rotate-180 rounded-md w-full bg-cover bg-center grid place-items-center"
            style={{ backgroundImage: `url(${bgGif})` }}
          >
            <img className="row" src={require("../../../images/logo.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}
