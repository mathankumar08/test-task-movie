import { useEffect, useState } from 'react';
import { UserContext } from './context/userContext';
import Router from './routes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("")

  useEffect(()=>{
    setIsAuthenticated(localStorage.getItem("token") || "")
  },[])

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
