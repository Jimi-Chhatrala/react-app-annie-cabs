import React from "react";

function ChangePassword() {
  return (
    <div className="w-full max-w-md sm:border-2 border-slate-300 rounded-md p-8 mx-auto my-10">
      <div className="space-y-10">
        <div className="flex w-full justify-center text-lg font-bold">
          Change Password
        </div>
        <div className="space-y-2">
          <div className="grid">
            <div className="grid space-y-1 w-full">
              <label className="text-sm font-medium">Old Password</label>
              <div className="flex bg-[#F2F2F2] items-center rounded-md">
                <input
                  className="bg-[#F2F2F2] p-2 rounded-md text-sm w-full"
                  placeholder="Enter Old Password"
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
          </div>
          <div className="grid">
            <div className="grid space-y-1 w-full">
              <label className="text-sm font-medium">New Password</label>
              <div className="flex bg-[#F2F2F2] items-center rounded-md">
                <input
                  className="bg-[#F2F2F2] p-2 rounded-md text-sm w-full"
                  placeholder="Enter New Password"
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
          </div>
          <div className="grid">
            <div className="grid space-y-1 w-full">
              <label className="text-sm font-medium">
                Confirm New Password
              </label>
              <div className="flex bg-[#F2F2F2] items-center rounded-md">
                <input
                  className="bg-[#F2F2F2] p-2 rounded-md text-sm w-full"
                  placeholder="Confirm New Password"
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
          </div>
        </div>
        <button className="bg-[#6EDA48] w-full py-2 font-bold rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
