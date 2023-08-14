import { Route, Navigate } from "react-router-dom"
const PublicRoutes = ({ children }) => {
	const brandlogin = localStorage.getItem("brandlogin")
	return brandlogin != 1 ? children : <Navigate to="/revuer-brand/dashboard" />;
}
export default PublicRoutes