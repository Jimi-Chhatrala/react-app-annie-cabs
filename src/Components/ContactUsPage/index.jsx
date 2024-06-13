import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import bgImage from "../../images/car-bg.png";
import bgImage2 from "../../images/group-50.png";

function ContactUsPage() {
  return (
    <div>
      <div
        className="h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-[#00000094] text-white font-semibold text-4xl flex justify-center items-center w-full h-full">
          Contact Us
        </div>
      </div>
      <div className="sm:flex mt-20 mb-10 w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
        <div className="w-full bg-[#F2F2F2] border-2 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center">
          <div className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="text-6xl mx-auto text-green-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Location_On">
                <g>
                  <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                  <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className=" text-center space-y-4">
            <span className="text-center text-2xl font-semibold">
              Address :
            </span>
            <div className="text-[#949494]">
              406 Akshat Tower, Nr. Pakwan Hotel, Opp. Rajpath Club, Sarkhej -
              Gandhinagar Highway, Ahmedabad - 380054
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F2F2F2] border-2 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center">
          <div className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="text-6xl mx-auto text-green-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"></path>
            </svg>
          </div>
          <div className=" text-center space-y-4">
            <span className="text-center text-2xl font-semibold">
              Mobile Number :
            </span>
            <div className="text-[#949494] text-center">
              <div>+9510203204</div>
              <div>+9510203204</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F2F2F2] border-2 space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center">
          <div className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="text-6xl mx-auto text-green-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
          </div>
          <div className=" text-center space-y-4">
            <span className="text-center text-2xl font-semibold">Email :</span>
            <div className="text-[#949494]">Info@anniecab.com</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-6xl mx-auto p-4 space-y-20">
        <div className="w-full sm:space-x-8 sm:flex justify-around">
          <div className="sm:w-1/2 space-y-2">
            <div className="text-2xl pb-4 font-medium">Send us an Email</div>
            <div className="md:flex w-full md:space-x-3">
              <div className="grid space-y-2 w-full">
                <label className="font-semibold text-sm">First Name</label>
                <input
                  className="bg-[#F2F2F2] w-full rounded-md p-2"
                  type="text"
                  value=""
                />
              </div>
              <div className="grid space-y-2 w-full">
                <label className="font-semibold text-sm">Last Name</label>
                <input
                  className="bg-[#F2F2F2] w-full rounded-md p-2"
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div className="grid w-full space-y-2">
              <label className="font-semibold text-sm">Email</label>
              <input
                type="email"
                className="bg-[#F2F2F2] w-full rounded-md p-2"
                value=""
              />
            </div>
            <div className="grid w-full space-y-2">
              <label className="font-semibold text-sm">Mobile Number</label>
              <input
                type="text"
                className="bg-[#F2F2F2] w-full rounded-md p-2"
                value=""
              />
            </div>
            <div className="grid w-full space-y-2">
              <label className="font-semibold text-sm">
                Comment or Message
              </label>
              <textarea
                type="textarea"
                className="bg-[#F2F2F2] w-full rounded-md p-2"
                rows="3"
              ></textarea>
            </div>
            <div className="text-center w-full">
              <button className="bg-[#6EDA48] w-full my-5 py-1 px-6 rounded-md text-white text-lg">
                Submit
              </button>
            </div>
          </div>
          <div className="sm:w-1/2 border">
            <div className="mapouter">
              <div style={{ overflow: "hidden", height: "482px" }}>
                <iframe
                  style={{ position: "relative", zIndex: "2" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1718016905770!5m2!1sen!2sin"
                  className="w-full h-full"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <a href="https://blooketjoin.org">blooket join</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
