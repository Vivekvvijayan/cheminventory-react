import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "../axios/axios";
import { useState } from "react";
import { toast } from "react-toastify";



function UpdateModal({ setModal, id,endPoint,flag,setFlag }) {


  const [amount, setAmount] = useState(0);
  const [cat, setCat] = useState("INC");

  const updateList = () => {
    axios({
      method: "PUT",
      url: `${endPoint}/update/${id}`,
      headers: {
        "x-access-token": localStorage.getItem("_token"),
        'Content-Type':'application/json'
      },
      data: {
        size: amount,
        cat: cat,
      },
    })
      .then((res) => {
          
         setModal(false)
         setFlag(!flag)

      })
      .catch((err) => {
        if(err.response.status === 401) {
          return toast(err.response.data.message,{theme:"dark"})
        }
      });
  };

  return (
    <div className="main-container flex absolute top-[50%] left-[30%] ">
      <div className="container w-[350px] h-[200px] bg-[#2d3133]">
        <div className="head bg-[#4e5659] p-2 text-white font-display text-sm flex justify-between items-center">
          <span>Update Component</span>
          <span onClick={() => setModal(false)}>
            <AiOutlineCloseSquare size={20} className="cursor-pointer" />
          </span>
        </div>

        <p class="font-display text-left p-4 text-white">
          Please make neccessory changes.
        </p>

        <div className="Barcode ml-3">
          <label for="name" class="text-white text-xs font-display">
            Amount of size change :
          </label>
          <input
            type="tel"
            placeholder="Amount in grams/mL"
            class="bg-[#25292b] w-32 p-2 mt-2 ml-2 outline-none text-white text-xs"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        {/* radio */}

        <div class="flex justify-center mt-2">
          <div class="flex items-center mr-4">
            <input
              id="inline-radio"
              type="radio"
              value={cat}
              name="inline-radio-group"
              class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => setCat("INC")}
              defaultChecked
            />
            <label
              for="inline-radio"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Add
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value={cat}
              name="inline-radio-group"
              class="w-3 h-3 text-white bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => setCat("DEC")}
            />
            <label
              for="inline-2-radio"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remove
            </label>
          </div>
        </div>

        {/* radio */}
        <button
          onClick={updateList}
          class="ml-4 px-5 py-1 shadow font-display text-white mr-2 mt-2 bg-red-500 rounded-sm flex items-center justify-center text-[12px] font-bold"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateModal;
