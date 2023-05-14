import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import Inorganic from "../tableData/Inorganic";
import Organic from "../tableData/Organic";
import Solvents from "../tableData/Solvents";
import Modal from "../Modal";
import UpdateModal from "../UpdateModal";
import Loader from "../Loader";
import axios from "../../axios/axios";
import { toast } from "react-toastify";


function All() {

  const location = useLocation();
  const [loc, setLocation] = useState("organic");
  const [loader,setLoader] = useState(false)
  const [data,setData] = useState([])
  const [modal,setModal] = useState(false)
  const [id,setId] = useState('')
  const [flag,setFlag] = useState(false)
  const [deleteModal,setDeleteModal] = useState(false)

  useEffect(() => {
    setLocation(location?.pathname);
  }, [location]);


  useEffect(() => {
 
    setLoader(true)
    axios({
      method:"GET",
      url:loc,
      headers:{
        'x-access-token':localStorage.getItem('_token')
      }
    }).then(res => {
      setLoader(false)
      setData(res?.data)
      

    }).catch(err=> {

      setLoader(false)
      
    })

  },[loc,flag])

  return (
    <>
      <div class=" overflow-y-auto shadow-md w-[90%] ">
        <div class="filterContainer bg-[#2d3133] mb-2">
          <div class="relative overflow-x-auto"></div>
        </div>

        {/* tabs 2 */}

        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-800 dark:border-gray-600 dark:text-gray-400">
          <li class="mr-2">
            <Link
              to="/all-items/organic"
              aria-current="page"
              class={`inline-block p-4 text-white ${
                loc === "/all-items/organic" ? "dark:bg-[#4e5659]" : ""
              } dark:text-white transition ease-in-out font-display`}
            >
              Organic
            </Link>
          </li>
          <li class="mr-2">
            <Link
              to="/all-items/inorganic"
              class={`inline-block p-4 text-white ${
                loc === "/all-items/inorganic" ? "dark:bg-[#4e5659]" : ""
              } dark:text-white transition ease-in-out font-display`}
            >
              In Organic
            </Link>
          </li>
          <li class="mr-2">
            <Link
              to="/all-items/solvents"
              class={`inline-block p-4 text-white ${
                loc === "/all-items/solvents" ? "dark:bg-[#4e5659]" : ""
              } dark:text-white transition ease-in-out font-display`}
            >
              Solvents
            </Link>
          </li>
          
      
        </ul>

        {/* tabs 2 */}

        {/* tables dynamically append here */}


      {
        loader ? <Loader /> :  <Outlet context={[data?.response,setModal,setId,flag,setFlag,setDeleteModal]}/>
      }
     
     
      
        {/* tables dynamically append here */}

        {/* <Modal /> */}
        {
          modal  &&  <UpdateModal setModal={setModal} id={id} endPoint={loc} flag={flag} setFlag={setFlag}/> 
        
        } 

        {
          deleteModal && <Modal setDeleteModal={setDeleteModal} id={id} flag={flag} setFlag={setFlag}/>
        }


  
      </div>
    </>
  );
}

export default All;
