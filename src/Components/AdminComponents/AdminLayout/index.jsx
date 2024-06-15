import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaCar,
  FaRegUser,
  FaRegUserCircle,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { IoLogOut, IoSpeedometerOutline } from "react-icons/io5";
import { MdContactPhone, MdOutlineVerifiedUser } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          className="absolute cursor-pointer -right-10 top-5 w-7"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <FaArrowRightLong className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </div>
        <div className="flex gap-x-4 items-center bg-white rounded">
          <img src={require("../../../images/logo.png")} />
        </div>
        <ul className="pt-6">
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <IoSpeedometerOutline className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Dashboard
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <FaRegUser className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              User
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <FaRegUserCircle className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Vendor
            </span>
          </li>
          <Link to="admin_vehicle">
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <FaCar className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Ride
              </span>
            </li>
          </Link>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <MdOutlineVerifiedUser className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Verification
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <MdContactPhone className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Contact Details
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <nav className="bg-slate-200 px-4 py-3 flex justify-end">
          <div className="flex items-center gap-x-5">
            <div className="relative">
              <button className="text-white group flex gap-x-2">
                {/* <FaUserCircle className="w-6 h-6 mt-1" /> */}
                <img
                  src={require("../../../images/user.jpg")}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-black text-sm">
                  <p className="font-bold">Hello Admin</p>
                  <p className="flex flex-start">Admin</p>
                </div>
                <div className="z-10 hidden absolute bg-white rounded-lg shadow w-36 group-focus:block top-full right-0">
                  <p className="pt-1 text-xs font-semibold text-gray-950">
                    Welcome Hello Admin
                  </p>
                  <ul className="py-2 flex flex-col gap-y-2 text-sm text-gray-950">
                    <li className="hover:bg-slate-300 text-start">
                      <a href="#" className="ml-4">
                        <IoMdContact className="inline-block -mt-1 w-5 h-5" />{" "}
                        Profile
                      </a>
                    </li>
                    <li className="hover:bg-slate-300 text-start">
                      <a href="#" className="ml-4">
                        <RiLogoutBoxRFill className="inline-block -mt-1 w-5 h-5" />{" "}
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
export default App;
