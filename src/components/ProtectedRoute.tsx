import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }: any) => {
    const user = useSelector((state: any) => state.user);
    let location = useLocation();

    if (user.state.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default ProtectedRoute;