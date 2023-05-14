import { BsFilesAlt } from "react-icons/bs";
import Locationtable from "../tableData/Locationtable";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Location() {
  const [loc, setLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    setLoc(location.pathname);
  }, [location]);
  return (
    <div className="main-container flex w-full justify-between">
      <div className="container w-[350px] h-[200px] bg-[#2d3133]">
        <div className="head bg-[#4e5659] p-2 text-white font-display text-sm">
          Locations
        </div>
        <div className="box-body mt-3  p-3">
          <div className="flex flex-col">
            <Link
              to="/location/cupboards"
              class="flex items-center text-white text-xs cursor-pointer hover:text-[#3e9475]"
            >
              <BsFilesAlt class="mr-1" />
              Cupboards
            </Link>
            <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
              <BsFilesAlt class="mr-1" />
              Fridges
            </span>
            <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
              <BsFilesAlt class="mr-1" />
              Personal
            </span>
            <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
              <BsFilesAlt class="mr-1" />
              Stores
            </span>
          </div>
        </div>
      </div>
{
  loc !== '/location' ?  <Locationtable /> :''
}
     
    </div>
  );
}

export default Location;
