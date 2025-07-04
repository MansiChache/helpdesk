import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      alert('Password reset link sent!');
    } else {
      alert('Enter your email');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200">
      <div className="bg-white p-10 rounded shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-4">Helpdesk System</h2>
        <p className="text-sm mb-4">
          Don't worry, enter your email below and we'll send you a link to reset your password
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-2 rounded mb-3"
        >
          Submit
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

export default ForgotPassword;