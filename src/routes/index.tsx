import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import MoviesPage from '../pages/Movies';
import PublicRoute from './PublicRoute';
import { useContext } from 'react';

function Router() {
    const isAuthenticated = false

    console.log(isAuthenticated, "isAuthenticated")
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoute isAuthenticated={isAuthenticated}/>}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                    <Route path="/movie" element={<MoviesPage />} />
                    <Route path="/movie/list" element={<MoviesPage />} />
                </Route>

                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
