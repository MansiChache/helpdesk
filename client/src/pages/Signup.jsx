import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


const Signup = () => {
  const [form, setForm] = useState({ username: '', password: '', email: '', role: 'user' });
  const navigate = useNavigate();

  const handleSignup = async () => {
  const { username, password, email, role } = form;

  if (!username || !password || !email || !role) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const res = await axios.post(
      '/api/signup',
      { username, password, email, role }
    );

    alert('Signup successful!');
    navigate(`/${role}/dashboard`);
  } catch (err) {
    console.error('Signup error:', err);
    if (err.response?.data?.message) {
      alert(err.response.data.message);
    } else {
      alert('Signup failed. Please try again.');
    }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-navbar">
      <div className="bg-teal-200 p-12 rounded shadow-lg w-[60%] min-h-[70vh] flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto space-y-6">
        <h2 className="text-3xl font-roboto font-bold text-center mb-6 italic">Helpdesk System</h2>
        <p className="text-30px text-center mb-4 font-semibold font-roboto">Sign up here</p>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
        />
        <select
          className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="operation">Operation Team</option>
          <option value="tech">Technical Support</option>
        </select>
        <div className="flex justify-center mb-3">
        <button
          onClick={handleSignup}
          className="w-1/2 bg-customBlue text-white py-2 rounded-xl"
        >
          Sign Up
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
              onClick={() => navigate("/")}
              className="text-black font-semibold"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;