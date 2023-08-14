import { Route, Navigate } from "react-router-dom"
const PublicRoutes = ({ children }) => {
	const brandlogin_profile_camp_status = localStorage.getItem("brandlogin_profile_camp_status")
	return brandlogin_profile_camp_status != 1 ? children : <Navigate to="/revuer-brand/dashboard" />;
}
export default PublicRoutes