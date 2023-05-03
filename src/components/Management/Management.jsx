import React from "react";
import { AiFillFileAdd, AiFillLock } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Management() {
  return (
    <div className="table-container w-[90%]">
      <div class="w-full dark:bg-[#4e5659] py-2 px-2 flex justify-between">
        <span class="flex justify-left items-center text-white font-semibold font-display text-sm">
          <FaUser color="white" class="mr-1" />
          User Accounds
        </span>
        <span>
          <button class="float-right border border-gray-400 font-display px-2 py-1 shadow text-white font-medium mr-2 bg-[#4e5659] rounded-sm flex items-center justify-center text-[13px]">
            Add Users
            <AiFillFileAdd class="ml-1" />
          </button>
        </span>
      </div>

      {/* table here */}

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="dark:bg-[#2d3133] border-b dark:border-gray-700">
          <th
            scope="col"
            class="px-6 py-3 text-white text-xs border-r border-gray-700 font-display"
          >
            Name
          </th>

          <th
            scope="col"
            class="px-6 py-3 text-white text-xs border-r border-gray-700 font-display"
          >
            Email
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-white text-xs border-r border-gray-700 font-display"
          >
            Account Type
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-white text-xs border-r border-gray-700 font-display"
          >
            Actions
          </th>
        </thead>
        <tbody class="dark:bg-[#2d3133]">
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700 font-display">
            <th
              scope="row"
              class="px-6 py-4 font-bold dark:text-gray-300 text-xs border-r dark:border-gray-700 font-display"
            >
              vivekvvijayan
            </th>
            <th
              scope="row"
              class="px-6 py-3 font-bold dark:text-gray-300 text-xs border-r dark:border-gray-700 font-display"
            >
              vivekaravikulathillam@gmail.com
            </th>
            <td class="px-6 py-3 text-xs dark:text-gray-300 border-r dark:border-gray-700 font-display">
              Admin
            </td>
            <td class="px-6 py-3 text-xs dark:text-gray-300 border-r dark:border-gray-700">
              <span class="flex justify-around text-white">
                <span class="p-2 bg-gray-500 cursor-pointer">
                    <AiFillLock />
                </span>
                <span class="p-2 bg-red-500 cursor-pointer">
                <RxCross1 />
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      {/* table here */}
    </div>
  );
}

export default Management;
