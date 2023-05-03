import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiFillFolderAdd,
  AiTwotoneTags,
  AiTwotoneSetting,
  AiOutlineApartment,
} from "react-icons/ai";
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { FaUsers } from "react-icons/fa";

function SideMenu() {

  return (

    <div class="w-[20%] h-screen flex bg-[#3a3e41] mt-6">
      <div className="w-52 h-[40%] justify-around ml-5">
        <ul class="h-[100%] justify-center text-white">
         
          <li class="bg-[#4e5659] p-2 cursor-pointer rounded-sm font-display text-sm hover:bg-[#3e9475] mt-2">
            <Link to="/search" class="flex items-center">
        
              <AiOutlineSearch class="mr-1" /> Search
            </Link>
          </li>

          <li class="p-2 cursor-pointer bg-[#4e5659] mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm">
            <Link to="/add" class="flex items-center">
          
              <AiFillFolderAdd class="mr-1" /> Add Container
            </Link>
          </li>

          <li class="p-2 cursor-pointer bg-[#4e5659] mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm">
            <Link to="/location" class="flex items-center">
              {" "}
              <AiTwotoneTags class="mr-1" />
              Location
            </Link>
          </li>
          <li class="p-2 cursor-pointer bg-[#4e5659] mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm">
            <Link to="/order" class="flex items-center">
              {" "}
              <BiPurchaseTagAlt class="mr-1" />
              Orders
            </Link>
          </li>
          <li class="p-2 cursor-pointer bg-[#4e5659] mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm">
            <Link to="/admin" class="flex items-center">
              {" "}
              <AiTwotoneSetting class="mr-1" />
              Activity & Auditing
            </Link>
          </li>
          <li class="p-2 cursor-pointer bg-[#4e5659] mt-1 border-[1px] font-display text-sm hover:bg-[#3e9475] border-[#333] rounded-sm">
            <Link to="/management" class="flex items-center">
              {" "}
              <FaUsers class="mr-1" />
              Management
            </Link>
          </li>
  
        </ul>
      </div>
    </div>
      
  
  );
}

export default SideMenu;
