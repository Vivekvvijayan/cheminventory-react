import React from "react";
import Login from "../Login/Login";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import List from "../List/List";
import { FiLogOut } from "react-icons/fi";
import SideMenu from "../SideMenu/SideMenu";
import Routers from "../Routes";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const location = useLocation();
  const [loc, setLoc] = useState("");
  useEffect(() => {
    setLoc(location.pathname);
  }, [location]);
  return (
    <div class="w-[100%] bg-[#3a3e41] flex justify-between">
      {loc != "/login" && <SideMenu />}

      <Routers />
    </div>
  );
}

export default Home;
