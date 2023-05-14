import React from "react";
import { AiOutlineCloseSquare, AiTwotoneSetting } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import SearchModal from "../SearchModal";
import { useState } from "react";
import axios from "../../axios/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Search() {
  const {state} = useLocation
  const [result, setResult] = useState([]);
  const [containerName, setContainerName] = useState("");
  const [containerType, setContainerType] = useState("Organic");
const [modal,setModal] = useState(false)
const [loading,setLoading] = useState(false)
useEffect(() => {
  if(state) {
    return toast("Welcome to chemical world",{
      theme:"dark"
    })
  }
},[])
  const searchContainer = async () => {
    

    if(containerName === "" || containerType === "") {
     return toast("Please enter fields!",{
      className:"bg-[#4e5659] text-white",
      
     });
    }
    try {
      setModal(true)
      setLoading(true)
      axios({
        method:'GET',
        url:`/search/${containerName}/${containerType}`,
        headers:{
          'x-access-token':localStorage.getItem('_token')
        }
      }).then(res => {
          setLoading(false)
          
       setResult(res?.data?.response)

      }).catch(err => {
        console.log('Error on getting response');
      })
    } catch (err) {
      console.log("Error on searching process");
    }
  };

  return (
    <div className="container  w-[500px] h-[250px] bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white font-display text-sm">
        Search for a Container
      </div>
      <div className="box-body mt-3  p-3">
        <div className="name">
          <label for="name" class="text-white text-xs font-display">
            Name
          </label>
          <input
            type="text"
            placeholder="Container Name"
            class="bg-[#25292b] font-display w-full p-3 mt-2 outline-none text-xs text-white"
            onChange={(event) => setContainerName((event.target.value).charAt(0).toUpperCase() +(event.target.value).slice(1).toLowerCase(),)}
          value={containerName}
          />
        </div>

        <select
          id="countries"
          class="bg-[#4e5659] border mt-3 pb-2 border-gray-300 font-display text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          onChange={(event) => setContainerType(event.target.value)}
          value={containerType}
        >
          <option value="Organic" defaultValue={"Organic"}>
            Organic
          </option>
          <option value="Solvent">Solvents</option>
          <option value="Inorganic">In Organic</option>
        </select>

        <button
          type="submit"
          class="px-5 py-1 bg-[#536066] text-sm font-display flex items-center justify-center text-white mt-3 float-right"
          onClick={searchContainer}
        >
          Search
        </button>
{
  modal &&  <SearchModal result={result} setModal={setModal} loading={loading} />
}
        
      </div>
    </div>
  );
}

export default Search;
