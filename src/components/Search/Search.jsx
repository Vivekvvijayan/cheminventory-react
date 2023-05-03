import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link } from "react-router-dom";


function Search() {
  return (
    <div className="container  w-[500px] h-[400px] bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white font-display text-sm">Search for a Container</div>
      <div className="box-body mt-3  p-3">
        <div className="name">
          <label for="name" class="text-white text-xs font-display">Name</label>
          <input type="text" placeholder="Container Name" class="bg-[#25292b] font-display w-full p-3 mt-2 outline-none text-xs text-white"/>
        </div>
        
        <div className="eNo mt-2">
          <label for="name" class="text-white text-xs font-display">CAS Number</label>
          <input type="text" placeholder="CAS Number" class="bg-[#25292b] font-display w-full p-3 mt-2 outline-none text-xs text-white"/>
        </div>

        <select
            id="countries"
            class="bg-[#4e5659] border mt-3 pb-2 border-gray-300 font-display text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            <option selected>

              Solvents
            </option>
            <option value="organic">Organic</option>
            <option value="organic">In Organic</option>
          </select>

        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">Barcode</label>
          <input type="text" placeholder="Container Barcode" class="bg-[#25292b] font-display w-full p-3 mt-2 outline-none text-xs text-white"/>
        </div>
        <button type="submit" class="px-5 py-1 bg-[#536066] text-sm font-display flex items-center justify-center text-white mt-3 float-right">
          Search
      
        </button>
      </div>
    </div>
  );
}

export default Search;
