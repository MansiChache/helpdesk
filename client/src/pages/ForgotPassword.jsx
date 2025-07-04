import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      alert("Password reset link sent!");
    } else {
      alert("Enter your email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navbar">
      <div className="bg-teal-200 p-12 rounded shadow-lg w-[60%] min-h-[70vh] flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto space-y-8">
          <p className="text-sm font-semibold mb-4 text-center">
            Don't worry, enter your email below and we'll send you a link to
            reset your password
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded mb-3 placeholder-black"
          />
          <div className="flex items-center flex-col mb-3 space-y-6">
            <button
              onClick={handleSubmit}
              className="w-1/2 bg-customGreen text-white py-2 rounded-xl"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-1/2 bg-customBlue text-white py-2 rounded-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
