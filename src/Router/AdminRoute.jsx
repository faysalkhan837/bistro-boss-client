import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Components/Hooks/UseAdmin";
import UseAuth from "../Components/Hooks/UseAuth";


const AdminRoute = ({ children }) => {
  const {user, loding} = UseAuth();
  const [isAdmin, isAdminLoding] = UseAdmin();
  const location = useLocation()

  if (loding || isAdminLoding) {
    return <span className="loading loading-spinner text-secondary"></span>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace ></Navigate>
};


export default AdminRoute;