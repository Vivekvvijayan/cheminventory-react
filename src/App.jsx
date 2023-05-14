import React from "react";
import Home from "./components/Home/Home";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import { FaSignOutAlt } from "react-icons/fa";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [location, setLocation] = useState("");
  const [user,setUser] = useState({})

  const loc = useLocation().pathname;
  useEffect(() => {
    setLocation(loc);
  }, [loc]);

  // useEffect(() => {
  //   const userDetails = JSON.parse(localStorage.getItem('user'))
  //   setUser(userDetails)
  // },[loc])

  return (
    <>
      <div className="w-full bg-[#3a3e41] flex justify-between p-4">
        <div class="flex w-25 p-4">
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

        <div className="flex">
          {location != "/login" ? (
            <>
            <div className="avatar flex justify-around items-center">

             {/* <p class="mr-3 font-display text-white font-bold text-xs mt-2"> {user?.email} </p>   */}
              <div class="relative w-8 h-8 mr-3 mt-3 cursor-pointer overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-10 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                    ></path>
                </svg>
                    </div>
              </div>
               

              <button class="px-2 font-display shadow hover:bg-slate-600 bg-[#536066] text-sm rounded-sm font-light text-white flex flex-col items-center justify-center">
                <FaSignOutAlt size={25} />
                <Link to="/login" onClick={() =>localStorage.clear()}> Sign Out</Link>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* header section closed */}

      <Home />
      <ProtectedRoute />
      <ToastContainer />
    </>
  );
}

export default App;
