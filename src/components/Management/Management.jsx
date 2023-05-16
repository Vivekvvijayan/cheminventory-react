import React from "react";
import { useEffect, useState } from "react";
import { AiFillFileAdd, AiFillLock } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import axios from "../../axios/axios";
import { toast } from "react-toastify";

function Management() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/management",
      headers: {
        "x-access-token": localStorage.getItem("_token"),
      },
    })
      .then((res) => {
    
        setUsers(res?.data?.response);
      })
      .catch((err) => {
        return toast("Internal server error",{
          theme:"dark"
        })
      });
  });

  return (
    <div className="table-container w-[90%]">
      <div class="w-full dark:bg-[#4e5659] py-2 px-2 flex justify-between">
        <span class="flex justify-left items-center text-white font-semibold font-display text-sm">
          <FaUser color="white" class="mr-1" />
          User Accounds
        </span>
      </div>

      {/* table here */}

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="dark:bg-[#2d3133] border-b dark:border-gray-700">
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
          {
            users?.map(({ _id,email }) => {
              return (
                <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700 font-display" key={_id}>
            <th
              scope="row"
              class="px-6 py-2 dark:text-gray-300 text-xs border-r dark:border-gray-700 font-display"
            >
             {email}
            </th>
            <td class="px-6 py-2 text-xs dark:text-gray-300 border-r dark:border-gray-700 font-display">
              Admin
            </td>
            <td class="px-6 py-2 text-xs dark:text-gray-300 border-r dark:border-gray-700">
              <span class="flex text-white">
                <span class="p-2 bg-red-500 cursor-pointer ml-1">
                  <RxCross1 />
                </span>
              </span>
            </td>
          </tr>
              )
            })
          }
        </tbody>
      </table>
      {/* table here */}
    </div>
  );
}

export default Management;
