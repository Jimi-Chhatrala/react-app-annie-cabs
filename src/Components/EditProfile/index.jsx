import React from "react";

function EditProfile() {
  return (
    <div className="w-full max-w-md sm:border-2 border-slate-300 rounded-md p-6 mx-auto my-10">
      <form className="space-y-8">
        <div className="flex w-full justify-center items-end">
          <input type="file" className="hidden" />
          <img
            className="w-20 h-20 rounded-full"
            src={require("../../images/user.jpg")}
            alt="User"
          />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            className="-ml-6 rounded-full bg-green-400"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
          </svg>
        </div>
        <div className="space-y-2">
          <div className="grid">
            <label className="text-sm font-medium">First Name</label>
            <input
              className="bg-[#F2F2F2] p-2 rounded-md text-sm text-[#413d3d]"
              type="text"
              value="user"
            />
          </div>
          <div className="grid">
            <label className="text-sm font-medium">Last Name</label>
            <input
              className="bg-[#F2F2F2] p-2 rounded-md text-sm text-[#413d3d]"
              type="text"
              value="user"
            />
          </div>
          <div className="grid">
            <label className="text-sm font-medium">Mobile Number</label>
            <input
              className="bg-[#726d6d] cursor-not-allowed p-2 rounded-md text-sm text-[#413d3d]"
              type="text"
              disabled
              value="9898989898"
            />
          </div>
          <div className="grid">
            <label className="text-sm font-medium">Email</label>
            <input
              className="bg-[#F2F2F2] p-2 rounded-md text-sm text-[#413d3d]"
              type="text"
              value="user@gmail.com"
            />
          </div>
          <div className="grid">
            <label className="text-sm font-medium">Address</label>
            <input
              className="bg-[#F2F2F2] p-2 rounded-md text-sm text-[#413d3d]"
              type="text"
            />
          </div>
        </div>
        <button className="bg-[#6EDA48] w-full py-2 font-bold rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
