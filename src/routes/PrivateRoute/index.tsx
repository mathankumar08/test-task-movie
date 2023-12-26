import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { paths } from "../constant";


const PrivateRoute = ({isAuthenticated} : any) => {
    console.log("pr8ivatee")
    if (!isAuthenticated) {
        return <Navigate to={paths.login} replace />;
    }

    return (
        <Outlet/>
    )
}

export default PrivateRoute