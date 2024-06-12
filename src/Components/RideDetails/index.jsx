import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RideDetails() {
  const navigate = useNavigate();
  const [style, setStyle] = useState("invisible");
  const [isHidden, setIsHidden] = useState(true);

  const handlePhoneNo = () => {
    setIsHidden(!isHidden);
  };

  const formatNumber = (number) => {
    if (isHidden) {
      return "+91 " + "xxxxxxxxxx";
    } else {
      return "+91 " + number;
    }
  };

  const changeStyle = () => {
    if (style == "invisible") setStyle("");
    else setStyle("invisible");
  };

  return (
    <>
      <div className="my-5">
        <img
          className="rounded-lg mx-auto w-full max-w-md h-64 object-contain"
          src={require("../../images/mss.jpg")}
        />
      </div>
      <div className="flex items-center justify-between mx-auto w-full max-w-6xl">
        <div className="">
          <div className="text-2xl font-semibold">swift</div>
          <div className="text-sm font-medium">Automatic</div>
        </div>
        <div>
          <button className="bg-[#6EDA48] px-4 py-1 rounded-md  font-medium">
            + Add Review
          </button>
        </div>
      </div>
      <div className="flex my-10 items-center justify-between mx-auto w-full max-w-6xl">
        <div>
          <div className="text-lg font-medium">Driver Name</div>
          <div>vendor vendor</div>
        </div>
        <div>
          <div className="text-lg font-medium">Vehicle Number</div>
          <div>GJ01MS1234</div>
        </div>
        <div>
          <div className="text-lg font-medium">Vehicle </div>
          <div>swift</div>
        </div>
        <div>
          <div className="text-lg font-medium">Seat Availability</div>
          <div>3</div>
        </div>
        <div>
          <div className="text-lg font-medium">Fare</div>
          <div>₹100</div>
        </div>
      </div>
      <div className="flex justify-between my-10 items-center mx-auto w-full max-w-6xl">
        <div className="grid">
          <div className="text-xl font-medium">Pickup Location</div>
          <div>ahmedabad</div>
        </div>
        <div className="grid">
          <div className="text-xl font-medium">Ride Date</div>
          <div>2024-06-12</div>
        </div>
        <div className="grid">
          <div className="text-xl font-medium">Ride Time</div>
          <div>18:00</div>
        </div>
        <div className="grid">
          <div className="text-xl font-medium">Drop Location</div>
          <div>vadodara</div>
        </div>
      </div>
      <div className="flex my-10 items-center justify-around mx-auto w-full max-w-6xl">
        <button
          className="bg-[#6EDA48] px-20 py-1 rounded-md text-white font-medium"
          onClick={changeStyle}
        >
          View Contact
        </button>
      </div>
      <div
        className={`${style} w-full h-screen fixed grid place-items-center top-0 bg-[#0000009d]`}
      >
        <div className="p-2 w-full max-w-lg bg-white">
          <div className="flex justify-end">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              fill-rule="evenodd"
              className="text-xl cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={changeStyle}
            >
              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"></path>
            </svg>
          </div>
          <div className="p-8 space-y-6 text-center">
            <div className="text-lg flex justify-center font-semibold">
              Ride Details
            </div>
            <img
              className="w-20 h-20 rounded-full object-cover mx-auto"
              src={require("../../images/user.jpg")}
            />
            <div className="flex justify-between">
              <div>
                <div className="font-medium">Driver Name</div>
                <div className="text-sm">vendor vendor</div>
              </div>
              <div>
                <div className="font-medium">Car Name</div>
                <div className="text-sm">swift</div>
              </div>
              <div>
                <div className="font-medium">Time</div>
                <div className="text-sm">18:00</div>
              </div>
            </div>
            <div className="flex justify-around">
              <div>
                <div className="font-medium">Fare Price</div>
                <div className="text-sm">₹100</div>
              </div>
              <div>
                <div className="font-medium">Contact Number</div>
                <div className="text-sm">{formatNumber("9898989898")}</div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              {isHidden ? (
                <button
                  className="bg-[#6EDA48] w-2/3 mx-auto py-1 rounded-md text-white font-medium"
                  onClick={handlePhoneNo}
                >
                  Show Contact
                </button>
              ) : (
                <button
                  className="bg-[#216cdd] w-2/3 mx-auto py-1 rounded-md text-white font-medium"
                  onClick={() => navigate("/user_chat")}
                >
                  Chat Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RideDetails;
