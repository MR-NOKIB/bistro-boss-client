import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [admin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <span className="h-screen m-auto loading loading-spinner flex items-center justify-between loading-xl"></span>
    }
    if (user || admin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace ></Navigate>


};

export default AdminRoute;