import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Star } from 'lucide-react';
import Layout from '../components/Layout';

const UserProfile = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    alert(`Feedback submitted: ${feedback} (Rating: ${rating})`);
    setFeedback('');
    setRating(0);
  };

  return (
    <Layout>
    
        <div className="bg-gray-50">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <div className="bg-navbar p-6 rounded-lg">
              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
                    U
                  </div>
                  <div className="text-gray-800">
                    <h2 className="text-xl font-semibold">Username</h2>
                    <p>Contact No: 1234567890</p>
                    <p>Email: user@example.com</p>
                    <p>Department: Technical</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
                <textarea
                  className="w-full border p-2 rounded mb-4"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Write your feedback here..."
                />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`cursor-pointer ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => handleStarClick(i)}
                    />
                  ))}
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-navbar text-black font-bold px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit Feedback
                </button>
              </div>

            </div>
          </div>
        </div>
      </Layout>
  );
};

export default UserProfile;