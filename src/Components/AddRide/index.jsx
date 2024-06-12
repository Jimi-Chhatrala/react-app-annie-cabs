import React from "react";

function AddRide() {
  return (
    <div className="grid place-items-center py-4">
      <div className="bg-[#f3f3f1] space-y-4 w-full max-w-md shadow-md p-4 rounded-md">
        <div className="space-x-4 w-full flex">
          <input
            className="rounded-md w-full p-2"
            type="text"
            placeholder="From"
            value=""
          />
          <input
            className="rounded-md w-full p-2"
            type="text"
            placeholder="To"
            value=""
          />
        </div>
        <div className="space-x-4 flex">
          <input
            className="rounded-md w-full p-2"
            type="date"
            placeholder="Date"
            value=""
          />
          <input
            className="rounded-md w-full p-2"
            type="time"
            placeholder="Time"
            value=""
          />
        </div>
        <div className="space-x-4 flex">
          <input
            className="rounded-md w-full p-2"
            type="text"
            placeholder="Price"
            value=""
          />
          <select className="rounded-md w-full p-2">
            <option>Available Set</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <select className="rounded-md w-full p-2">
          <option>Select Car</option>
          <option value="66683fec768db52725e8ffa9">Maruti Suzuki-swift</option>
        </select>
        <button className="w-full bg-green-500 rounded-md py-1">Upload</button>
      </div>
    </div>
  );
}

export default AddRide;
