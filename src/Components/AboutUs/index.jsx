import React from "react";

function AboutUs() {
  return (
    <div className="w-full max-w-6xl mx-auto space-x-4 space-y-4 justify-around p-4">
      <div></div>
      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="sm:flex sm:flex-row-reverse grid place-items-center">
        <div className="flex place-items-end">
          <img
            className="w-full max-w-md"
            src={require("../../images/Group 4.png")}
            alt="About Us Car Image"
          />
        </div>
        <div class="bg-[#6EDA48] hidden sm:flex w-1 mx-2 h-52 rounded-full"></div>
        <div className="w-full">
          <div className="space-y-4">
            <p className="text-[#726d6d]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <button className="bg-[#6EDA48] px-4 py-2 font-medium rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
