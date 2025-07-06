import { useState } from 'react';
import { Star, UserPen } from 'lucide-react';
import Layout from '../components/Layout';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    alert(`Feedback submitted: ${feedback} (Rating: ${rating})`);
    setFeedback('');
    setRating(0);
  };

  const goToEditProfile = () => {
    navigate('/edit/profile');
  }

  return (
    <Layout>
        <div className="font-sanchez">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <h2 className="text-3xl  mb-2">User Profile</h2>
            <div className="bg-navbar p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className=" relative bg-white rounded-lg p-6 shadow-md mb-2 grid-rows-4">
                <div className="flex flex-col  gap-6 ">
                  <UserPen 
                    onClick={goToEditProfile}
                    className='absolute top-3 right-3 cursor-pointer'/>
                  
                  <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mx-auto">
                    <FaUser 
                      className='w-24 h-24'
                      
                      />
                  </div>
                  
                  <div className="text-gray-800 ">
                    <h2 className="text-xl font-semibold">Username</h2>
                    <p>Contact No: 1234567890</p>
                    <p>Email: user@example.com</p>
                    <p>Department: Technical</p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white rounded-lg p-6 shadow-md mb-20 grid-rows-2">
                <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
                <textarea
                  className="w-full border p-2 rounded mb-4"
                  rows="1"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Write your feedback here..."
                />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`cursor-pointer ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      onClick={() => handleStarClick(i)}
                    />
                  ))}
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-navbar text-black font-bold px-6 py-2 rounded"
                  cursor-pointer
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