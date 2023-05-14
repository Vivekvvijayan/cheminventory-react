import React from "react";
import { BiExport } from "react-icons/bi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import Modal from "../Modal";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios/axios";
import { toast } from "react-toastify";

function List() {
  const [report, setReport] = useState([]);
  const [date, setDate] = useState(null);
  const [userContainer, setUserContainer] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "/admin",
      headers: {
        "x-access-token": localStorage.getItem("_token"),
      },
    })
      .then((res) => {
       
        setReport(res?.data?.response);
      })
      .catch((err) => {
        return null;
      });
  }, []);

  const filterDataBasedOnDate = async (e) => {
    setDate(e.target.value);

    axios({
      method: "POST",
      url: "/filter",
      headers: {
        "x-access-token": localStorage.getItem("_token"),
      },
      data: {
        date,
      },
    })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] ">
      <div className="filterContainer bg-[#2d3133] mb-2">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#4e5659] dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-white font-display flex">
                  <RxCounterClockwiseClock size={16} class="mr-1" />
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
                      placeholder=""
                      required
                      onChange={filterDataBasedOnDate}
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
                      value="Admin"
                      disabled
                    />
                  </div>
                </td>
                <td>
                  <div class="ml-2">
                    <label
                      for="first_name"
                      class="block mb-2 text-xs font-medium text-gray-900 font-display dark:text-white"
                    >
                      Chemical name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 font-display text-gray-900 text-xs    outline-none block p-2 w-[250px] dark:bg-[#25292b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Chemical "
                      required
                      value={userContainer}
                      onChange={(event) =>
                        setUserContainer(
                          event.target.value.charAt(0).toUpperCase() +
                            event.target.value.slice(1).toLowerCase()
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* tabs */}

      {/* tabs */}

      <table class="w-full text-sm text-left text-white bg-[#2d3133] mt-2 mb-2">
        <tbody>
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-bold text-gray-900 dark:text-white text-xs font-display"
            >
              Timestamp (UTC)
            </th>
            <td class="px-6 py-4 text-xs font-bold font-display">Name</td>
            <td class="px-6 py-4 text-xs font-bold font-display">Subject</td>
            <td class="px-6 py-4 text-xs font-bold font-display">Events</td>
            <td class="px-6 py-4 text-xs font-bold font-display">
              <p class=" text-xs hover:underline font-bold">Description</p>
            </td>
            <button class="float-right px-5 py-1 shadow font-display text-white mr-2 mt-2 bg-[#536066] rounded-sm flex items-center justify-center text-[12px] font-bold">
              Export
              <BiExport class="ml-1" />
            </button>
          </tr>
          {report
            ?.filter((item) => {
              return userContainer === ""
                ? item
                : item.name.includes(userContainer);
            })
            .map(
              ({ _id, subject, description, name, updatedAt, container }) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700"
                    key={_id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white text-xs font-display"
                    >
                      {new Date(updatedAt).toLocaleString()}
                    </th>
                    <td class="px-6 py-4 text-xs font-display">{name}</td>
                    <td class="px-6 py-4 text-xs font-display">{container}</td>
                    <td class="px-6 py-4 text-xs font-display">{subject}</td>
                    <td class="px-6 py-4 text-xs font-display">
                      <p class="font-medium text-xs hover:underline">
                        {description}
                      </p>
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
