import React, { useState, useEffect } from "react";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for token in session storage
    const token = sessionStorage.getItem("token");
    console.log("Token from session storage:", token);
  
    if (token) {
      // Token exists in session storage
      setIsLoggedIn(true);
  
      // Check if token is admin token
      if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4MjQ5NzQyMCwiZXhwIjoxNjg1MDg5NDIwfQ.RdbVeQ0wfX5lWzFZu4Wxb--9yz-o4VYFh00gq8o6PRc") { // replace "your_admin_token_here" with your actual admin token
        setIsAdmin(true);
        console.log("User is an admin");
      }
    }
  }, []); 


  const handleLogin = () => {
    // perform login logic, set token in session storage, and set isLoggedIn to true
    sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4MjQ5NzQyMCwiZXhwIjoxNjg1MDg5NDIwfQ.RdbVeQ0wfX5lWzFZu4Wxb--9yz-o4VYFh00gq8o6PRc");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // perform logout logic, remove token from session storage, and set isLoggedIn to false
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false); // reset isAdmin state as well
  };

  return (
    <div>
      {isAdmin && isLoggedIn && <AdminLayout onLogout={handleLogout} />}
      {!isAdmin && isLoggedIn && <UserLayout onLogout={handleLogout} />}
      {!isLoggedIn && <Layout onLogin={handleLogin} />}
    </div>
  );
}

export default App;