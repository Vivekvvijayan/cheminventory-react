import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Routers from "./Routes";
import Search from "./Search/Search";

function ProtectedRoute() {
  return (
   <div className="overflow-x-hidden">
     <Routes>
    
      <Route path="/" element={<Routers />} />
      
      {/* <Route path="/login" element={<Login />} /> */}
      
    </Routes>
   </div>
  );
}

export default ProtectedRoute;
