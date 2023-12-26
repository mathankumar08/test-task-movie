import { Navigate, Outlet, Route } from "react-router-dom";
import { paths } from "../constant";


const PublicRoute = ({ isAuthenticated }: any) => {
    console.log("public")

    if (isAuthenticated) {
        return <Navigate to={paths.movie} replace />;
    }

    return (
        <Outlet />
    )
}

export default PublicRoute