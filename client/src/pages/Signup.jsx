import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ username: '', password: '', email: '', role: 'user' });
  const navigate = useNavigate();

  const handleSignup = () => {
    const { username, password, email, role } = form;
    if (username && password && email && role) {
      navigate(`/${role}/dashboard`);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200">
      <div className="bg-white p-10 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-6">Helpdesk System</h2>
        <p className="text-sm text-center mb-4">Sign up here</p>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-2 border mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border mb-3"
        />
        <select
          className="w-full p-2 border mb-4"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="operation">Operation Team</option>
          <option value="tech">Technical Support</option>
        </select>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-2 rounded mb-3"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 underline text-sm"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signup;