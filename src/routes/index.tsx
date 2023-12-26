import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import MoviesPage from '../pages/Movies';
import PublicRoute from './PublicRoute';
import { useContext } from 'react';
import CreateEditMoviePage from '../pages/CreateEditMovie';
import { useUserContext } from '../context/userContext';

function Router() {
    const { isAuthenticated } = useUserContext()
    console.log(isAuthenticated, "isAuthenticated")
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoute isAuthenticated={isAuthenticated}/>}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                    <Route path="/movie" element={<MoviesPage />} />
                    <Route path="/movie/create" element={<CreateEditMoviePage />} />
                    <Route path="/movie/edit/:movieId" element={<CreateEditMoviePage />} />
                </Route>

                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
