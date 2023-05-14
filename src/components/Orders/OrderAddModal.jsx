import React from "react";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "../../axios/axios";
import { toast } from "react-toastify";

function OrderAddModal({ setAddModal, flag, setFlag }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState(null);
  const [prize, setPrize] = useState(null);
  const [choice, setChoice] = useState(null);

  const uploadOrder = async () => {
    try {
      axios({
        method: "POST",
        url: "/orders",
        headers: {
          "x-access-token": localStorage.getItem("_token"),
        },
        data: {
          name,
          size,
          prize,
          status: choice,
        },
      })
        .then((res) => {
          setAddModal(false);
          setFlag(!flag);
          return toast("Order added.", {
            theme: "dark",
          });
        })
        .catch((err) => {
          return toast("Failed to add order.", {
            theme: "dark",
          });
        });
    } catch (err) {
      console.log("Error on upload");
    }
  };

  return (
    <div className="main-container flex w-full absolute top-20 left-[40%]">
      <div className="container w-[350px] h-auto bg-[#2d3133]">
        <div className="head bg-[#4e5659] p-2 text-white font-display text-sm flex justify-between items-center">
          <span>Order Update</span>
          <span onClick={() => setAddModal(false)}>
            <AiOutlineCloseSquare size={20} className="cursor-pointer" />
          </span>
        </div>

        <p class="font-display text-left p-4 text-white">Order Details</p>

        {/* radio */}
        <div className="container">
          <div class="flex ">
            <div className="name p-2 w-25">
              <label for="name" class="text-white text-xs font-display">
                Name
              </label>
              <input
                type="text"
                placeholder="Container Name"
                class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
                required
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value.charAt(0).toUpperCase() +
                      event.target.value.slice(1).toLowerCase()
                  )
                }
              />
            </div>
            <div className="name p-2">
              <label for="name" class="text-white text-xs font-display">
                Size
              </label>
              <input
                type="number"
                placeholder="Container size"
                class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
                minLength={0}
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>
          <div className="name p-2">
            <label for="name" class="text-white text-xs font-display">
              Prize
            </label>
            <input
              type="number"
              placeholder="Container size"
              class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
              minLength={0}
              
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
            />
          </div>
       
        </div>
        {/* radio */}
        <button
          onClick={uploadOrder}
          class="ml-4 px-5 py-1 shadow font-display text-white mr-2 mt-2 mb-2 bg-red-500 rounded-sm flex items-center justify-center text-[12px] font-bold"
        >
          Upload Data
        </button>
      </div>
    </div>
  );
}

export default OrderAddModal;
