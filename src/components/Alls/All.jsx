import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";

function All() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] ">
      <div class="filterContainer bg-[#2d3133] mb-2">
        <div class="relative overflow-x-auto"></div>
      </div>

      {/* tabs 2 */}

      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-800 dark:border-gray-600 dark:text-gray-400">
        <li class="mr-2">
          <a
            href="#"
            aria-current="page"
            class="inline-block p-4 text-white bg-gray-100 active dark:bg-[#536066] dark:text-white"
          >
            Organic
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 hover:text-gray-600 hover: dark:hover:bg-[#4e5659] dark:hover:text-white"
          >
            In Organic
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 hover:dark:bg-[#4e5659] hover:dark:bg-[#4e5659] dark:hover:text-white"
          >
            Solvents
          </a>
        </li>
      </ul>

      {/* tabs 2 */}

      <table class="w-full text-sm text-left text-white bg-[#2d3133] mt-2">
        <tbody>
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xs font-display"
            >
              Substance Name
            </th>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Quantity <span class="font-light">(g)</span>
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">Type</td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Supplier
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Last purchase Date
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              <p class=" text-xs hover:underline font-bold">Actions</p>
            </td>
            <button class="float-right px-5 py-1 shadow font-display text-black mr-2 mt-2 bg-[#fff] rounded-sm flex items-center justify-center text-[12px] font-bold">
              Print
              <BiExport class="ml-1" />
            </button>
          </tr>
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white text-xs font-display"
            >
              2023-05-02 07:17:16
            </th>
            <td class="px-6 py-4 text-xs font-display">Admin</td>
            <td class="px-6 py-4 text-xs font-display">Benzene</td>
            <td class="px-6 py-4 text-xs font-display">Benzene</td>
            <td class="px-6 py-4 text-xs font-display">Purchased</td>
            <td class="px-6 py-4 text-xs font-display">
              <p class="font-medium text-xs hover:underline">
                <div className="action-container flex justify-around items-center">
                  <span class="p-2 cursor-pointer hover:bg-gray-600">
                    {" "}
                    <BsFillPencilFill />{" "}
                  </span>
                  <span class="p-2 bg-red-400 cursor-pointer">
                    <AiTwotoneDelete />
                  </span>
                </div>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default All;
