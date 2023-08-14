import { Route, Navigate } from "react-router-dom"
const ProtectedRoutes = ({ children }) => {
	const brandlogin = localStorage.getItem("brandlogin")
	return brandlogin == 1 ? children : <Navigate to="/revuer-brand/login" />;
}
export default ProtectedRoutes