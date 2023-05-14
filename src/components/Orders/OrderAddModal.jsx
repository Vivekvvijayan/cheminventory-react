import React from "react";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "../../axios/axios";
import { toast } from "react-toastify";

function OrderAddModal({ setAddModal, flag, setFlag }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState(null);
  const [prize, setPrize] = useState(null);
  const [choice, setChoice] = useState("Pending");
  const [unit,setUnit] = useState('g')

  const uploadOrder = async () => {
    if(name == "" ||size == "" || prize == ""|| choice == "" ||unit == "") return toast("Please fill blank!",{theme:"dark"})
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
          unit
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
          <div class="flex ">
            <div className="name p-2 flex justify-around items-center">
              <div className="">
                <label htmlFor="name" class="text-white text-xs font-display">
                  Size
                </label>
                <input
                  type="tel"
                  placeholder="Quantity"
                  class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
                  minLength={0}
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
                <select
                  name=""
                  id=""
                  className="px-3 py-2 mt-2 bg-[#25292b] text-white text-xs"
                  onChange={(e) =>setUnit(e.target.value)}
                  value={unit}
                >
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="mL">mL</option>
                  <option value="L">L</option>
                </select>
              </div>
            </div>
          </div>
          <div className="name p-2">
            <label for="name" class="text-white text-xs font-display">
              Prize
            </label>
            <input
              type="tel"
              placeholder="Prize(Rs)"
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
          Order
        </button>
      </div>
    </div>
  );
}

export default OrderAddModal;
