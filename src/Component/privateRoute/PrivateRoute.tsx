
import { Navigate, Outlet } from "react-router-dom";
import { useContextGlobal } from "../globalState/useContextGlobal";


export default function PrivateRoute() {
  const {user} = useContextGlobal() 

  if (!user.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
