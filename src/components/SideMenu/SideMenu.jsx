import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineSearch,
  AiFillFolderAdd,
  AiTwotoneTags,
  AiTwotoneSetting,
  AiOutlineApartment,
} from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { CiTempHigh,CiShare1 } from "react-icons/ci";

import { useState } from "react";
import { useEffect } from "react";

function SideMenu() {
  const [menu, setMenu] = useState("");
  const location = useLocation();
  useEffect(() => {
    setMenu(location.pathname);
  }, [location]);

  return (
    <div class="w-[20%] h-screen flex bg-[#3a3e41] mt-6">
      <div className="w-52 h-[40%] justify-around ml-5">
        <ul class="h-[100%] justify-center text-white">
          <li
            class={`${
              menu === "/search" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            }  p-2 cursor-pointer rounded-sm font-display text-sm hover:bg-[#3e9475] mt-2`}
          >
            <Link to="/search" class="flex items-center">
              <AiOutlineSearch class="mr-1" /> Search
            </Link>
          </li>

          <li
            class={`${
              menu === "/all-items" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer  mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/all-items" class="flex items-center">
              <CiTempHigh class="mr-1" /> All Items
            </Link>
          </li>
          <li
            class={`${
              menu === "/add" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/add" class="flex items-center">
              <AiFillFolderAdd class="mr-1" /> Add Container
            </Link>
          </li>

          <li
            class={`${
              menu === "/location" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer  mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/location" class="flex items-center">
              {" "}
              <AiTwotoneTags class="mr-1" />
              Location
            </Link>
          </li>
          <li
            class={`${
              menu === "/order" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer  mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/order" class="flex items-center">
              {" "}
              <BiPurchaseTagAlt class="mr-1" />
              Orders
            </Link>
          </li>
          <li
            class={`${
              menu === "/admin" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/admin" class="flex items-center">
              {" "}
              <AiTwotoneSetting class="mr-1" />
              Activity & Auditing
            </Link>
          </li>
          <li
            class={`${
              menu === "/management" ? "bg-[#3e9475]" : "bg-[#4e5659]"
            } p-2 cursor-pointer  mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm`}
          >
            <Link to="/management" class="flex items-center">
              {" "}
              <FaUsers class="mr-1" />
              Management
            </Link>
          </li>
        </ul>
        <span class="text-xs ml-5 text-[#999] flex items-center cursor-pointer">ChemInventory support <CiShare1 class="ml-1"/> </span>
      </div>
    </div>
  );
}

export default SideMenu;
