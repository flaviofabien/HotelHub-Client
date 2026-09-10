
import { Navigate, Outlet } from "react-router-dom";
import { useContextGlobal } from "../globalState/useContextGlobal";

export default function PrivateRouteAdmin() {
  const {user} = useContextGlobal() 

  if (user.token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
}
