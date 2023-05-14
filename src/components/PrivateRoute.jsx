import { Outlet,Navigate } from 'react-router-dom'

const  PrivateRoute = () => {
    const token = localStorage.getItem('_token');

  if(token) {
    return <Outlet />
  }else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute