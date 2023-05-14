import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
import axios from "../../axios/axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useRef } from "react";

function Organic() {
  const [data, setModal, setId, flag, setFlag, setDeleteModal] =
    useOutletContext();

  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const tableRef = useRef(null);
  return (
    <>
      <div className="flex items-center">
        <input
          type="searchbox"
          placeholder="filter item"
          class="bg-[#25292b] w-[200px] ml-2 p-2 mt-2 outline-none font-display text-white text-xs"
          onChange={(e) =>
            setSearch(
              e.target.value.charAt(0).toLocaleUpperCase() +
                e.target.value.slice(1).toLowerCase()
            )
          }
          value={search}
        />

        <div class="flex items-center ml-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100  rounded dark:bg-gray-700 mt-2"
            onChange={() => setFilter(!filter)}
            checked={filter}
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm mt-2 font-medium text-gray-900 dark:text-gray-300"
          >
            Filter unavailable items
          </label>
        </div>
      </div>
      <table
        class="w-full text-sm text-left text-white bg-[#2d3133] mt-2"
        ref={tableRef}
      >
        <tbody>
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xs font-display "
            >
              Substance Name
            </th>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Quantity <span class="font-light text-[10px]">(g/kg/L/mL)</span>
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">Type</td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Supplier
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              Expiry date
            </td>
            <td class="px-6 py-4 text-xs font-semibold font-display">
              <p class=" text-xs hover:underline font-bold">Actions</p>
            </td>
            <DownloadTableExcel
              filename="Orders"
              sheet="Orders"
              currentTableRef={tableRef.current}
            >
              <button class="float-right px-5 py-1 shadow font-display text-white mr-2 mt-2 bg-[#536066] rounded-sm flex items-center justify-center text-[12px] font-bold">
                Print
                <BiExport class="ml-1" />
              </button>
            </DownloadTableExcel>
          </tr>
          {data
            ?.filter((item) => {
              return !filter ? item : item.size === 0;
            })
            .filter((item) => {
              return search === "" ? item : (item.name.includes(search));
            })
            ?.map(({ _id, name, size, type, supplier, expiry, unit,chemicalName }) => {
              return (
                <tr
                  class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700"
                  key={_id}
                >
                  <div class="has-tooltip">
                    <span class="tooltip rounded shadow-lg p-2 bg-[#4e5659] text-white -mt-8">
                      {chemicalName ? chemicalName : 'N/A'}
                    </span>

                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white text-xs font-display"
                    >
                      {name}
                    </th>
                  </div>
                  <td class="px-6 py-3 text-xs font-display">
                    {size <= 0 ? (
                      <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Not available
                      </span>
                    ) : (
                      size + " " + unit
                    )}
                  </td>
                  <td class="px-6 py-3 text-xs font-display">{type}</td>
                  <td class="px-6 py-3 text-xs font-display">{supplier}</td>
                  <td class="px-6 py-3 text-xs font-display">
                    {new Date(expiry).toLocaleString().split(",")[0]}
                  </td>
                  <td class="px-6 py-3 text-xs font-display">
                    <span class="font-medium text-xs hover:underline">
                      <div className="action-container flex justify-around items-center">
                        <span
                          class="p-2 cursor-pointer hover:bg-gray-600"
                          onClick={() => {
                            setId(_id);
                            setModal(true);
                          }}
                        >
                          <BsFillPencilFill />{" "}
                        </span>
                        <span
                          class="p-2 bg-red-400 cursor-pointer"
                          onClick={() => {
                            setId(_id);
                            setDeleteModal(true);
                          }}
                        >
                          <AiTwotoneDelete />
                        </span>
                      </div>
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Organic;
