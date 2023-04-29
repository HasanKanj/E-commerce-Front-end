import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const data = await response.json();
      await sessionStorage.setItem("token", data.token);
      console.log(data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);

  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) sessionStorage.removeItem("token"); // updated to use localStorage
  });

  return (
    <div className="login-page">
      <div className="login_form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          {error && <p className="error">{error}</p>}
          <p className="message">
            Not registered?{" "}
            <a href="#" onClick={() => navigate("/register")}>
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
