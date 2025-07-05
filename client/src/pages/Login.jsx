import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    try {
      const res = await axios.post("/api/login", { username, password });

      const role = res.data.role;
      localStorage.setItem("userRole", role);
      if (role) {
        localStorage.setItem("userRole", role);
        navigate(`/${role}/dashboard`);
      } else {
        alert("Login failed: No role returned");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navbar ">
      <div className="bg-teal-200 p-12 rounded shadow-lg w-[60%] min-h-[70vh] flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto space-y-8">
          <h2 className="text-3xl font-bold italic text-center mb-6">
            Helpdesk System
          </h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
          />

          <div className="flex justify-center mb-3">
            <button
              onClick={handleLogin}
              className="w-1/2 bg-customGreen text-white py-2 rounded-xl"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-between text-sm">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-customRed font-semibold"
            >
              Forgot password
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-black font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
