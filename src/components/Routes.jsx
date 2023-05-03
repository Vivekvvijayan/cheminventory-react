import { Routes, Route } from "react-router-dom";
import List from "./List/List";
import Search from "./Search/Search";
import Login from "./Login/Login";
import Add from "./Add/Add";
import Order from "./Orders/Order";
import Management from "./Management/Management";
import Home from "./Home/Home";
import SideMenu from "./SideMenu/SideMenu";
import Location from "./Location/Location";

function Routers() {
  return (
    <div class="w-[80%] flex items-center h-[90%]">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />

        <Route path="/add" element={<Add />} />
        <Route path="/admin" element={<List />} />
        <Route path="/order" element={<Order />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </div>
  );
}

export default Routers;
