import React from "react";

function Price() {
  return (
    <div className="sm:flex mt-20 mb-10 w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
      <div className="w-full border-2 border-slate-400 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
        <img
          className="w-12 mx-auto"
          src={require("../../images/coin-2-svgrepo-com 1.png")}
          alt="Coin Collection Image"
        />
        <span className="text-center font-semibold">
          Your pick of rides at low prices
        </span>
        <div className="text-[#726d6d]">
          No matter where you’re going, by bus or carpool, find the perfect ride
          from our wide range of destinations and routes at low prices.
        </div>
      </div>
      <div className="w-full border-2 border-slate-400 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
        <img
          className="w-12 mx-auto"
          src={require("../../images/coin-2-svgrepo-com 1.png")}
          alt="Coin Collection Image"
        />
        <span className="text-center font-semibold">
          Your pick of rides at low prices
        </span>
        <div className="text-[#726d6d]">
          No matter where you’re going, by bus or carpool, find the perfect ride
          from our wide range of destinations and routes at low prices.
        </div>
      </div>
      <div className="w-full border-2 border-slate-400 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
        <img
          className="w-12 mx-auto"
          src={require("../../images/coin-2-svgrepo-com 1.png")}
          alt="Coin Collection Image"
        />
        <span className="text-center font-semibold">
          Your pick of rides at low prices
        </span>
        <div className="text-[#726d6d]">
          No matter where you’re going, by bus or carpool, find the perfect ride
          from our wide range of destinations and routes at low prices.
        </div>
      </div>
    </div>
  );
}

export default Price;
