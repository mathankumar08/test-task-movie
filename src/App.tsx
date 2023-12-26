import React from 'react';
import { useState } from 'react';
import UserContext from './context/userContext';
import Router from './routes';
import LoginPage from './pages/Login';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    // <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      // <Router />
    <LoginPage/>
    // </UserContext.Provider>
  );
}

export default App;
