import React from "react";

function HelpUs() {
  return (
    <div className="bg-[#6EDA48] my-10 w-full sm:flex sm:flex-row-reverse sm:p-10 place-items-center">
      <div className="sm:w-1/2 flex justify-center">
        <img
          className="w-full max-w-sm"
          src={require("../../images/scamDetective-653544b71d88f51797db 1 (1) 1.png")}
          alt="Help Us Image"
        />
      </div>
      <div className="sm:w-1/2 p-10 space-y-4">
        <h2 class="text-white text-2xl font-medium">
          Help us keep you safe from scams
        </h2>
        <p class="text-white text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <button class="border-2 py-1 px-6 rounded-lg border-white text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HelpUs;
