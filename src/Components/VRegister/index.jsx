import React from "react";
import bgImage from "../../images/Screenshot_2023-10-25_163132-transformed_auto_x2.jpg";
import { useNavigate } from "react-router-dom";

function VRegister() {
  const navigate = useNavigate();
  return (
    <div className="sm:p-8 w-full rounded-md">
      <div
        className="bg-cover rounded-md bg-center w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full rounded-md bg-[#00000036] grid place-items-center">
          <div className="w-full px-2 py-4 max-w-sm">
            <div className="p-4 w-full rounded-md  bg-[#ffffff8c] space-y-8">
              <div className="flex rounded-md w-full bg-white hover:cursor-pointer">
                <div
                  className="w-full text-center font-medium p-2 rounded-md"
                  onClick={() => navigate("/register")}
                >
                  User
                </div>
                <div className="w-full bg-[#6EDA48] text-white text-center p-2 rounded-md font-medium">
                  Vendor
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid">
                  <label className="font-medium text-sm">First Name</label>
                  <input
                    className="p-3 w-full text-sm rounded-md"
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    value=""
                  />
                </div>
                <div className="grid">
                  <label className="font-medium text-sm">Last Name</label>
                  <input
                    className="p-3 w-full text-sm rounded-md"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    value=""
                  />
                </div>
                <div className="grid">
                  <label className="font-medium text-sm">Email</label>
                  <input
                    className="p-3 text-sm rounded-md"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value=""
                  />
                </div>
                <div className="grid">
                  <label className="font-medium text-sm">Mobile No.</label>
                  <input
                    className="p-3 text-sm rounded-md"
                    placeholder="Mobile No."
                    type="text"
                    name="phno"
                    value=""
                  />
                </div>
                <div className="grid">
                  <label className="font-medium text-sm">Password</label>
                  <div className="flex w-full bg-white items-center rounded-md">
                    <input
                      className="p-3 w-full text-sm rounded-md"
                      placeholder="Password"
                      name="password"
                      type="password"
                      value=""
                    />
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="text-lg mx-2 cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
                    </svg>
                  </div>
                </div>
                <div className="grid">
                  <label className="font-medium text-sm">
                    Confirm Password
                  </label>
                  <div className="flex w-full bg-white items-center rounded-md">
                    <input
                      className="p-3 w-full text-sm rounded-md"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      type="password"
                      value=""
                    />
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="text-lg mx-2 cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
                    </svg>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-2 text-lg rounded-md font-bold bg-[#6EDA48]"
                >
                  Register
                </button>
              </form>
              <div className="text-sm font-semibold text-center">
                Already have an account?
                <span className="text-[#6EDA48] hover:cursor-pointer">
                  {" "}
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VRegister;
