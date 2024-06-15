import React from "react";

function AdminVehicle() {
  return (
    <div className="bg-[#f3f3f1] p-4 w-full">
      <div className="bg-white">
        <div className="p-4 underline underline-offset-4">Total Car 1</div>
        <div className="flex flex-wrap">
          <div className="w-1/2 grid p-4 place-items-center">
            <div className="w-full max-w-sm p-4 border rounded-md hover:border-slate-400 cursor-pointer">
              <img
                src={require("../../../images/mss.jpg")}
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
  );
}

export default AdminVehicle;
