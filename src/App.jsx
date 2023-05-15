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

        <div className="flex ">
          {location != "/login" ? (
            <>
            <div className="avatar flex justify-around items-center">

       
          
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
