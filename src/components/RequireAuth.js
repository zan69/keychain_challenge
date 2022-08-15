import useAuth from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    console.log(location);
    console.log(allowedRoles);

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) || allowedRoles === null || allowedRoles === undefined
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth;