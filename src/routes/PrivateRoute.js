
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({redirectTo, canAccess}) => {
  return canAccess() ? <Outlet /> : <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
