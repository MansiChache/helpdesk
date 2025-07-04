import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  if (!username || !password) {
    alert('Enter username and password');
    return;
  }

  try {
    const res = await axios.post('/api/login', { username, password });

    alert('Login successful!');
    const role  = res.data.role; 
    localStorage.setItem('userRole', role);
    if (role) {
      localStorage.setItem('userRole', role);
      navigate(`/${role}/dashboard`);
    } else {
      alert('Login failed: No role returned');
    }
  }catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200">
      <div className="bg-white p-10 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-6">Helpdesk System</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-3"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded mb-3"
        >
          Sign In
        </button>
        <div className="flex justify-between text-sm">
          <button
            onClick={() => navigate('/forgot-password')}
            className="text-blue-600 underline"
          >
            Forgot password?
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-600 underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;