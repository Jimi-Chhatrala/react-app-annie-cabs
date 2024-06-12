import React from "react";
import bgImage from "../../images/Screenshot_2023-10-25_163132-transformed_auto_x2.jpg";

function UserChat() {
  return (
    <div className="">
      <div className="h-[200px]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-[#00000094] text-white font-semibold text-4xl flex justify-center items-center w-full h-full">
          Chats
        </div>
      </div>
      <div className="w-full h-full flex">
        <div className="w-full h-screen">
          <div className="bg-[#6EDA48] h-[8vh] flex items-center px-5 py-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={require("../../images/user.jpg")}
            />
            <div className="font-medium pl-4 text-xl">vendor vendor</div>
          </div>
          <div className="bg-[#f3f3f1]">
            <div className="h-[84vh] overflow-y-scroll">
              <div className="p-1">
                <div className="text-center font-bold">Today</div>
                <div className="flex justify-end">
                  <div className="grid">
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#6EDA48] font-medium py-2 px-4 rounded-md flex justify-center">
                        hi
                      </div>
                      <img
                        className="w-6 h-6 rounded-full"
                        src={require("../../images/user.jpg")}
                      />
                    </div>
                    <div className="ml-auto text-[#726d6d]">17:04</div>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="flex justify-normal">
                  <div className="grid">
                    <div className="flex items-center space-x-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={require("../../images/user.jpg")}
                      />
                      <div className="bg-white font-medium py-2 px-4 rounded-md flex justify-center">
                        hello
                      </div>
                    </div>
                    <div className="text-[#726d6d]">17:05</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="p-1 h-[8vh] flex  rounded space-x-2">
              <input
                className="w-full bg-[#F2F2F2] p-2 rounded font-semibold"
                type="text"
                placeholder="type"
                value=""
              />
              <button className="bg-[#2fad46] p-2 font-semibold rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChat;
