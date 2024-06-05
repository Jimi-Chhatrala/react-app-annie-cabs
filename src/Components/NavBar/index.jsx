import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between shadow-md items-center px-5">
      <img
        src={require("../../images/logo.png")}
        alt="Annie Cabs Logo"
        className="w-full max-w-[100px] sm:max-w-[150px]"
      />
      <ul className="hidden sm:flex space-x-10">
        <li className="font-bold hover:cursor-pointer">Home</li>
        <li className="font-bold hover:cursor-pointer">About Us</li>
        <li className="font-bold hover:cursor-pointer">Contact</li>
      </ul>
      <div className="sm:flex">
        <div className="space-x-3">
          <button className="border-2 font-bold hover:cursor-pointer px-6 border-slate-800 rounded-md">
            Login
          </button>
          <button className="border-2 font-bold hover:cursor-pointer px-6 border-slate-800 rounded-md">
            Register
          </button>
        </div>
        <div class="text-2xl hidden">≡</div>
      </div>
    </div>
  );
}

export default NavBar;
