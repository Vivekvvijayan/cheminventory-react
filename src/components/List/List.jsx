import React from "react";
import { BiExport } from "react-icons/bi";

function List() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] ">
      <div className="filterContainer bg-[#2d3133] mb-2">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#4e5659] dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-white font-display">
                  Activity History & Auditing
                </th>

                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="ml-2 p-2">
                    <label
                      for="first_name"
                      class="block mb-2 text-xs font-medium text-gray-900 dark:text-white font-display"
                    >
                      Date Range (UTC)
                    </label>
                    <input
                      type="date"
                      id="first_name"
                      class="bg-gray-50 border font-display border-gray-300 text-gray-900 text-xs outline-none block p-2 w-[250px] dark:bg-[#25292b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="John"
                      required
                    />
                  </div>
                </td>
                <td>
                  <div class="">
                    <label
                      for="first_name"
                      class="block mb-2 text-xs font-medium text-gray-900 font-display dark:text-white"
                    >
                      User
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 font-display text-gray-900 text-xs outline-none block p-2 w-[250px] dark:bg-[#25292b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="John"
                      required
                    />
                  </div>
                </td>
                <td>
                  <div class="ml-2">
                    <label
                      for="first_name"
                      class="block mb-2 text-xs font-medium text-gray-900 font-display dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 font-display text-gray-900 text-xs    outline-none block p-2 w-[250px] dark:bg-[#25292b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Chemical "
                      required
                    />
                  </div>
              
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* tabs */}

      <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-3 font-display text-gray-900 bg-[#496d80] rounded-l-lg  active focus:outline-none dark:bg-[#4e5659] dark:text-white"
            aria-current="page"
          >
            Organic
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-3 font-display bg-white hover:text-gray-700 hover:bg-[#4e5659] focus:outline-none dark:hover:text-white dark:bg-[#2d3133] dark:hover:bg-[#4e5659]"
          >
            In-Organic
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-3 font-display bg-white hover:text-gray-700 hover:bg-[#496d80]  focus:outline-none dark:hover:text-white dark:bg-[#2d3133] dark:hover:bg-[#4e5659]"
          >
            Solvants
          </a>
        </li>
      </ul>

      {/* tabs */}

      <table class="w-full text-sm text-left text-white bg-[#2d3133] mt-2">
       
        <tbody>
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-bold text-gray-900 dark:text-white text-xs font-display"
            >
            Timestamp (UTC)
            </th>
            <td class="px-6 py-4 text-xs font-bold font-display">User</td>
            <td class="px-6 py-4 text-xs font-bold font-display">Subject</td>
            <td class="px-6 py-4 text-xs font-bold font-display">Events</td>
            <td class="px-6 py-4 text-xs font-bold font-display">
              <p class=" text-xs hover:underline font-bold">
               Description
              </p>
            </td>
            <button class="float-right px-5 py-1 shadow font-display text-black mr-2 mt-2 bg-[#fff] rounded-sm flex items-center justify-center text-[12px] font-bold">
             Export
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
            <td class="px-6 py-4 text-xs font-display">Purchased</td>
            <td class="px-6 py-4 text-xs font-display">
              <p class="font-medium text-xs hover:underline">
                Owner for (+)-3-bromocamphor 97+% (AEF00117) changed from
                "Daniel" to "Nam
              </p>
            </td>
          </tr>
         
         
          
        </tbody>
      </table>
    </div>
  );
}

export default List;
