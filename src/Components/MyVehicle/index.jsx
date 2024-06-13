import React, { useState } from "react";

function MyVehicle() {
  const [activeButton, setActiveButton] = useState("myVehicle");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="p-10 flex max-h-max w-full space-x-4">
      <div className="h-full w-full bg-[#f3f3f1] max-w-xs text-center rounded-md">
        <div
          className={`p-4  ${
            activeButton === "myVehicle" ? "bg-green-300" : ""
          } cursor-pointer text-lg font-medium`}
          onClick={() => handleClick("myVehicle")}
        >
          My Vehicle
        </div>
        <div
          className={`p-4 false ${
            activeButton === "addVehicle" ? "bg-green-300" : ""
          }  cursor-pointer text-lg font-medium`}
          onClick={() => handleClick("addVehicle")}
        >
          Add Vehicle
        </div>
      </div>
      {/* My Vehicle */}
      {activeButton === "myVehicle" && (
        <div className="bg-[#f3f3f1] p-4 w-full">
          <div className="bg-white">
            <div className="p-4 underline underline-offset-4">Total Car 1</div>
            <div className="flex flex-wrap">
              <div className="w-1/2 grid p-4 place-items-center">
                <div className="w-full max-w-sm p-4 border rounded-md hover:border-slate-400 cursor-pointer">
                  <img
                    src={require("../../images/mss.jpg")}
                    className="rounded-2xl w-full h-56 object-contain object-center p-2"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">vehicleName</h3>
                    <p>Maruti Suzuki - swift</p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">vehicleNumber</h3>
                    <p>GJ01MS1234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Vehicle */}
      {activeButton === "addVehicle" && (
        <div className="bg-[#f3f3f1] p-4 w-full space-y-4">
          <div className="flex space-x-5">
            <div className="grid">
              <label>Vehicle Brand</label>
              <select className="max-w-max p-2">
                <option>select</option>
                <option value="0">Maruti Suzuki</option>
                <option value="1">Hyundai</option>
                <option value="2">BMW</option>
                <option value="3">Audi</option>
                <option value="4">Tata</option>
                <option value="5">Toyota</option>
              </select>
            </div>
            <div className="grid">
              <label>Vehicle Model</label>
              <select className="max-w-max p-2">
                <option disabled="">Select</option>
                <option value="swift">swift</option>
                <option value="wagon R">wagon R</option>
                <option value="Ertiga">Ertiga</option>
              </select>
            </div>
          </div>
          <div className="grid">
            <label>vehicleNumber</label>
            <input type="text" className="border rounded-lg p-2" value="" />
          </div>
          <div className="space-y-8 my-8">
            <div className="flex w-full justify-around">
              <div>
                <div className="border-2 p-2 cursor-pointer bg-gray-300 w-full h-48 rounded-lg max-w-sm grid place-items-center border-slate-700 border-dashed">
                  <input className="hidden" type="file" />
                  <div className="max-w-xs text-center">
                    <p className="font-bold">click to upload.</p>
                    <p>
                      (This is just a demo dropzone. Selected files are{" "}
                      <span className="font-medium">not</span> actually
                      uploaded.)
                    </p>
                  </div>
                </div>
                <div className="text-center font-medium">Vehicle Image</div>
              </div>
              <div>
                <div className="border-2 cursor-pointer bg-gray-300 w-full h-48 rounded-lg max-w-sm grid place-items-center border-slate-700 border-dashed">
                  <input className="hidden" type="file" />
                  <div className="max-w-xs text-center">
                    <p className="font-bold">click to upload.</p>
                    <p>
                      (This is just a demo dropzone. Selected files are{" "}
                      <span className="font-medium">not</span> actually
                      uploaded.)
                    </p>
                  </div>
                </div>
                <div className="text-center font-medium">PUC Image</div>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <div>
                <div className="border-2 cursor-pointer bg-gray-300 w-full h-48 rounded-lg max-w-sm grid place-items-center border-slate-700 border-dashed">
                  <input className="hidden" type="file" />
                  <div className="max-w-xs text-center">
                    <p className="font-bold">click to upload.</p>
                    <p>
                      (This is just a demo dropzone. Selected files are{" "}
                      <span className="font-medium">not</span> actually
                      uploaded.)
                    </p>
                  </div>
                </div>
                <div className="text-center font-medium">Vehicle Insurance</div>
              </div>
              <div>
                <div className="border-2 cursor-pointer bg-gray-300 w-full h-48 rounded-lg max-w-sm grid place-items-center border-slate-700 border-dashed">
                  <input className="hidden" type="file" />
                  <div className="max-w-xs text-center">
                    <p className="font-bold">click to upload.</p>
                    <p>
                      (This is just a demo dropzone. Selected files are{" "}
                      <span className="font-medium">not</span> actually
                      uploaded.)
                    </p>
                  </div>
                </div>
                <div className="text-center font-medium">Vehicle Rc </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-green-400 font-medium p-4 w-full max-w-md rounded-md">
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyVehicle;
