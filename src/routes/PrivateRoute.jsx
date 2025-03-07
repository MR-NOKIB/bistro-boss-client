import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="h-screen m-auto loading loading-spinner flex items-center justify-between loading-xl"></span>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;