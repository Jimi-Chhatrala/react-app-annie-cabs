import React from "react";

function AdminVehicleInfo() {
  return (
    <>
      <div className="p-4">
        <div className="w-full bg-white p-4 rounded">
          <p className="font-bold">Vehicle Information</p>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white p-4 space-y-5">
          <div className="flex-col md:flex-row flex justify-between border-b-2 p-2">
            <span>Vehicle Id</span>
            <span className="font-bold">868e79te8h76f54d65g4d65fg46dg</span>
          </div>
          <div className="flex-col md:flex-row flex justify-between border-b-2 p-2">
            <span>Vehicle Brand</span>
            <span className="font-bold">Maruti Suzuki</span>
          </div>
          <div className="flex-col md:flex-row flex justify-between border-b-2 p-2">
            <span>Vehicle Model</span>
            <span className="font-bold">Swift</span>
          </div>
          <div className="flex-col md:flex-row flex justify-between border-b-2 p-2">
            <span>Vehicle Number</span>
            <span className="font-bold">GJ01MS1234</span>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border-2">
              <img
                className="w-full"
                src={require("../../../images/mss.jpg")}
                alt=""
              />
              <p className="text-center font-semibold my-3">Vehicle Image</p>
            </div>
            <div className="border-2">
              <img
                className="w-full"
                src={require("../../../images/mss.jpg")}
                alt=""
              />
              <p className="text-center font-semibold my-3">
                Vehicle Insurance
              </p>
            </div>
            <div className="border-2">
              <img
                className="w-full"
                src={require("../../../images/mss.jpg")}
                alt=""
              />
              <p className="text-center font-semibold my-3">PUC Image</p>
            </div>
            <div className="border-2">
              <img
                className="w-full"
                src={require("../../../images/mss.jpg")}
                alt=""
              />
              <p className="text-center font-semibold my-3">Vehicle RC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminVehicleInfo;
