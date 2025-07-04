// src/pages/Performance.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { User, Star } from "lucide-react";

const Performance = () => {
  const performanceData = {
    name: "Operation Team",
    contact: "9876543210",
    department: "IT Support",
    totalTickets: 50,
    solved: 35,
    pending: 10,
    inProgress: 5,
    rating: 4,
  };

  return (
    <div className="flex">
      <Sidebar role="operation" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] min-h-screen bg-white">
          <div className="max-w-[1190px] mx-auto py-6 px-4 grid grid-cols-2 gap-6 items-start">
            
            {/* Left Section */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-200 p-4 rounded-full">
                  <User size={40} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{performanceData.name}</h2>
                </div>
              </div>

              {/* Contact + Department */}
              <div className="bg-gray-200 p-4 rounded mb-4">
                <p><strong>Contact:</strong> {performanceData.contact}</p>
                <p><strong>Department:</strong> {performanceData.department}</p>
              </div>

              {/* Ticket Summary */}
              <div className="bg-gray-200 p-4 rounded space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Tickets Handled</span>
                  <span className="font-bold">{performanceData.totalTickets}</span>
                </div>
                <div className="flex justify-between">
                  <span>✅ Solved</span>
                  <span>{performanceData.solved}</span>
                </div>
                <div className="flex justify-between">
                  <span>⏳ Pending</span>
                  <span>{performanceData.pending}</span>
                </div>
                <div className="flex justify-between">
                  <span>🚧 In Progress</span>
                  <span>{performanceData.inProgress}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>⭐ Rating</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < performanceData.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <div className="bg-gray-200 p-4 rounded-full">
                <User size={40} />
              </div>
              <h2 className="text-lg font-semibold">{performanceData.name}</h2>
              <button className="bg-[#55D6C2] text-white px-6 py-2 rounded mt-2 hover:bg-[#3fb9a8]">
                View Details
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
