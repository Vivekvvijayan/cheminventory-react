import React from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

function Login() {
  return (
    <div class="w-[100%] h-screen bg-[#3a3e41] flex justify-evenly">
      <div className="w-[75%] h-[50%] flex justify-between">
        <div className="w-50 bg-[#2d3133] p-5 border-[1px] border-[#222]">
          <div className="flex w-25 m-2">
            <img
              src="https://app.cheminventory.net/images/ChemInventory.svg"
              alt=""
              class="w-[70px]"
            />
            <img
              src="https://app.cheminventory.net/images/ChemInventory.png"
              alt=""
              class="w-[225px]"
            />
          </div>
          <h1 class="text-center text-[#b6b8b8] text-lg font-bold font-display">Login</h1>
          <div className="login flex flex-col">
            <div className="email p-2 mt-3 bg-[#25292b] border-[1px] border-[#222] flex justify-between">
              <input
                type="text"
                placeholder="Email"
                class="bg-transparent outline-none text-white font-display text-[12px] w-[90%]"
                autoComplete="off"
              />
              <FaUserAlt color="white" size={12} />
            </div>
            <div className="password p-2 mt-3 bg-[#25292b] border-[1px] border-[#222] flex justify-between">
              <input
                type="password"
                placeholder="Password"
                class="outline-none text-white font-display text-[12px] bg-transparent w-[90%]"
              />
              <AiTwotoneLock color="white" size={15} />
            </div>
            <button
              type="submit"
              class="p-1 bg-[#4C595F] w-2/5 mt-3 text-[13px] font-display text-white font-bold "
            >
              Sign In
            </button>
            <a href="#" class="text-[#b6b8b8] underline text-xs text-center pt-6 font-display cursor-pointer">
              {" "}
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="w-80 h-[80%] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#b6b8b8] scrollbar-track-transparent">
          <h1 class="text-lg text-center p-2 bg-[#3a3e41] text-[#b6b8b8] font-display">
            Recent Updates & News
          </h1>
          <ul class="pt-6 mt-3 text-[#b6b8b8] text-sm leading-6">
            <li class="font-bold font-display">20 March 2023</li>
            <li class="font-display">Added new projectss</li>
            <li class="font-display">Added new projectss</li>
            <li class="font-display">Added new projectss</li>
            <li class="font-display">Added new projectss</li>
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
