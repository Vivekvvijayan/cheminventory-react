import { Routes, Route,Navigate } from "react-router-dom";
import List from "./List/List";
import Search from "./Search/Search";
import Login from "./Login/Login";
import Add from "./Add/Add";
import Order from "./Orders/Order";
import Management from "./Management/Management";
import Home from "./Home/Home";
import SideMenu from "./SideMenu/SideMenu";
import Location from "./Location/Location";
import All from "./Alls/All.jsx";
import PrivateRoute from "./PrivateRoute";
import Organic from './tableData/Organic'
import Inorganic from "./tableData/Inorganic";
import Solvents from "./tableData/Solvents";

function Routers() {
  return (
    <div class="w-[100%] flex items-center h-[90%]">
      <Routes>
        <Route element={<PrivateRoute />}>
          

          <Route path="/search" element={<Search />} />
          
      
          <Route path="/location" element={<Location />} />
          <Route path="/location/cupboards" element={<Location />} />
          <Route path='/*' element={ <Navigate to="/search" /> }/>
          <Route path="/add" element={<Add />} />
          <Route path="/admin" element={<List />} />
          <Route path="/order" element={<Order />} />
          <Route path="/management" element={<Management />} />

          <Route path="/all-items/organic" element={<All />} />
          <Route path="/all-items/inorganic" element={<All />} />
          <Route path="/all-items/solvents" element={<All />} />

          <Route element={<All />}> 

          <Route index path="/all-items/organic" element={<Organic />} />
          <Route index path="/all-items/inorganic" element={<Inorganic />} />
          <Route index path="/all-items/solvents" element={<Solvents />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Routers;
