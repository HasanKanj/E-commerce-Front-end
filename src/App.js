import React, { useState, useEffect } from "react";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Check for user data in session storage
    const userData = sessionStorage.getItem("userData");
    console.log("User data from session storage:", userData);

    if (userData) {
      // User data exists in session storage
      setIsLoggedIn(true);

      // Check the user's role
      const userDataObj = JSON.parse(userData);
      setUserRole(userDataObj.role);

      // Check if user is an admin
      const isAdmin = userDataObj.isAdmin;
      if (isAdmin) {
        setIsAdmin(true);
        console.log("User is an admin");
      }
    }
  }, []);

  const handleLogout = () => {
    // perform logout logic, remove user data from session storage, and set isLoggedIn to false
    sessionStorage.removeItem("userData");
    setIsLoggedIn(false);
    setIsAdmin(false); // reset isAdmin state as well
  };

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/user/login", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data.token);
      if (data.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoggedIn && (
        <>
          {isAdmin ? (
            <AdminLayout onLogout={handleLogout} />
          ) : (
            <UserLayout onLogout={handleLogout} />
          )}
        </>
      )}
      {!isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
