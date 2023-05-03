import { BsFilesAlt } from "react-icons/bs";

function Location() {
  return (
    <div className="container w-[350px] h-auto bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white font-display text-sm">
        Locations
      </div>
      <div className="box-body mt-3  p-3">
        <div className="flex flex-col">
          <span class="flex items-center text-white text-xs cursor-pointer hover:text-[#3e9475]">
            <BsFilesAlt class="mr-1"/>
            Cupboards
          </span>
          <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
            <BsFilesAlt class="mr-1"/>
            Fridges
          </span>
          <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
            <BsFilesAlt class="mr-1"/>
            Personal
          </span>
          <span class="flex items-center text-white text-xs cursor-pointer mt-2 hover:text-[#3e9475]">
            <BsFilesAlt class="mr-1"/>
            Stores
          </span>
        </div>
      </div>
    </div>
  );
}

export default Location;
