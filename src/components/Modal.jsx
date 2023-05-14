import React from "react";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "../axios/axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function Modal({ setDeleteModal, id, flag, setFlag }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loc = useLocation().pathname;

  const verifyUser = async () => {
    try {
      if (email === "" || password === "")
        return toast("Please fill blank", { theme: "dark" });

      axios({
        method: "POST",
        url: "/verifyUserForDelete",
        headers: {
          "x-access-token": localStorage.getItem("_token"),
        },
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // deletion process
            deleteItem();
          }
        })
        .catch((err) => {
          if (err.response.data.status === 401) {
            return toast("Invalid credintials", { theme: "dark" });
          }
          return toast("Invalid credintials", { theme: "dark" });
        });
    } catch (err) {
    
      return toast("Invalid credintials", { theme: "dark" });
    }
  };

  const deleteItem = () => {
    axios({
      method: "DELETE",
      url: `${loc}/${id}`,
      headers: {
        "x-access-token": localStorage.getItem("_token"),
      },
    })
      .then((res) => {
        setFlag(!flag);
        setDeleteModal(false);
        return toast("Deleted successfully", {
          className: "bg-[#4e5659] text-white font-display",
          theme: "success",
        });
      })
      .catch((err) => {
        return toast("Error!", {
          className: "bg-[#4e5659] text-white font-display",
          theme: "success",
        });
      });
  };

  return (
    <div className="main-container flex w-full absolute top-20 left-[40%] ">
      <div className="container w-[350px] h-auto bg-[#2d3133]">
        <div className="head bg-[#4e5659] p-2 text-white font-display text-sm flex justify-between items-center">
          <span>Delete</span>
          <span onClick={() => setDeleteModal(false)}>
            <AiOutlineCloseSquare size={20} className="cursor-pointer" />
          </span>
        </div>

        <p class="font-display text-left p-4 text-white">
          Enter user credintials to delete
        </p>

        <div className="name p-2 w-25">
          <input
            type="text"
            placeholder="Email"
            class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="name p-2 w-25">
          <input
            type="password"
            placeholder="Password"
            class="bg-[#25292b] font-display w-full p-2 mt-2 outline-none text-xs text-white"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          onClick={verifyUser}
          class="ml-4 px-5 py-1 mb-2 shadow font-display text-white mr-2 mt-2 bg-red-500 rounded-sm flex items-center justify-center text-[12px] font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Modal;
