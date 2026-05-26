import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = !!localStorage.getItem("username");
  return isAuth ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
