import React from "react";

function ContactUs() {
  return (
    <div className="my-20 max-w-6xl mx-auto p-4 space-y-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">For More Details Contact us</h1>
      </div>
      <div className="w-full sm:space-x-10 lg:space-x-20 sm:flex justify-around">
        <div className="sm:w-1/2 space-y-2">
          <div className="md:flex w-full md:space-x-3">
            <div className="grid space-y-2 w-full">
              <label className="font-semibold text-sm">First Name</label>
              <input
                className="bg-[#F2F2F2] w-full rounded-md p-2"
                type="text"
              />
            </div>
            <div className="grid space-y-2 w-full">
              <label className="font-semibold text-sm">Last Name</label>
              <input
                className="bg-[#F2F2F2] w-full rounded-md p-2"
                type="text"
              />
            </div>
          </div>
          <div className="grid w-full space-y-2">
            <label className="font-semibold text-sm">Email</label>
            <input
              className="bg-[#F2F2F2] w-full rounded-md p-2"
              type="email"
            />
          </div>
          <div className="grid w-full space-y-2">
            <label className="font-semibold text-sm">Mobile Number</label>
            <input
              className="bg-[#F2F2F2]  w-full rounded-md p-2"
              type="text"
            />
          </div>
          <div className="grid w-full space-y-2">
            <label className="font-semibold text-sm">Comment or Message</label>
            <textarea
              className="bg-[#F2F2F2]  w-full rounded-md p-2"
              type="textarea"
              rows="3"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="bg-[#6EDA48] my-5 py-1 px-6 rounded-md text-white text-lg">
              Submit
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 space-y-2">
          <div className="text-[#726d6d]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
          <div className="flex space-x-4 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="h-10 w-12 text-green-400"
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
            <div className="text-[#726d6d]">
              406 Akshat Tower, Nr. Pakwan Hotel, Opp. Rajpath Club, Sarkhej -
              Gandhinagar Highway, Ahmedabad - 380054
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="h-10 w-6 text-green-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
            <div className="text-[#726d6d]">Info@anniecab.com</div>
          </div>
          <div className="flex space-x-4 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="h-10 w-6 text-green-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
            </svg>
            <div className="text-[#726d6d]">+91 9510203204</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
