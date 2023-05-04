import { AiTwotoneSetting } from "react-icons/ai";

function Add() {
  return (
    <div className="container  w-[600px] h-auto  bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white text-sm font-bold font-display">
        Add a Component
      </div>
      <div className="box-body mt-3  p-3">
        <div className="name">
          <label for="name" class="text-white text-xs font-display">
            Name:
          </label>
          <input
            type="text"
            placeholder="Container Name"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none font-display text-white text-xs"
          />
        </div>
        {/* <div className="eNo mt-2">
          <label for="name" class="text-white text-xs font-display">
            CAS Number:
          </label>
          <input
            type="text"
            placeholder="CAS Number"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none font-display text-white text-xs"
          />
        </div> */}
        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">
            Container size:
          </label>
          <input
            type="text"
            placeholder="Container Size"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none text-white text-xs"
          />
        </div>
        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">
            Barcode:
          </label>
          <input
            type="text"
            placeholder="Container Barcode"
            class="bg-[#25292b] w-full p-2 font-display mt-2 outline-none text-white text-xs"
          />
        </div>
        <span class="flex justify-around p-2">
          <select
            id="countries"
            class="bg-[#4e5659] border mt-2 font-display border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            <option selected>
              <AiTwotoneSetting class="mr-1" />
              Store
            </option>
          </select>

          <select
            id="countries"
            class="bg-[#4e5659] font-display border mt-2 border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            <option selected>
              <AiTwotoneSetting class="mr-1" />
              Solvents
            </option>
            <option value="organic">Organic</option>
            <option value="organic">In Organic</option>
          </select>
        </span>

        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">
            Supplier:
          </label>
          <input
            type="text"
            placeholder="Supplier Name"
            class="bg-[#25292b] w-full p-3 mt-2 outline-none text-white text-xs font-display"
          />
        </div>
        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">
            Expiry Date:
          </label>
          <input
            type="Date"
            placeholder="Supplier Name"
            class="bg-[#25292b] w-full p-3 mt-2 outline-none text-white text-xs"
          />
        </div>
        <button
          type="submit"
          class="px-5 font-display text-xs py-1 mb-2 bg-[#536066] flex items-center justify-center text-white mt-3 float-right"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Add;
