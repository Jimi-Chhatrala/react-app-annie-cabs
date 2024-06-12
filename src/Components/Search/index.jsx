import React from "react";
import bgImage from "../../images/bg-img-home.png";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  return (
    <div
      className="h-[500px] bg-center bg-no-repeat bg-cover flex items-end"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="px-4 sm:px-8 w-full">
        <form className="w-full rounded-lg grid m-4 md:flex mx-auto max-w-4xl -mb-12 p-6 bg-white shadow-lg space-y-4 md:space-y-0 space-x-0 md:space-x-3">
          <input
            className="md:py-1 p-3 px-3 w-full rounded-lg bg-[#F2F2F2]"
            type="text"
            placeholder="Leaving From"
            required
          />
          <input
            className="md:py-1 p-3 px-3 w-full rounded-lg bg-[#F2F2F2]"
            type="text"
            placeholder="Going To"
            required
          />
          <input
            className="md:py-1 p-3 px-3 w-full rounded-lg bg-[#F2F2F2]"
            type="date"
            name="date"
            required
          />
          <button
            className="bg-[#6EDA48] rounded-lg py-3 w-full font-semibold"
            onClick={() => navigate("/cab_search")}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
