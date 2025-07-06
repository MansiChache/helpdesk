import Layout from "../components/Layout";
import { Star } from "lucide-react";
import { FaUser } from "react-icons/fa";

const Performance = () => {
  const performanceData = {
    name: "Operation Name",
    contact: "0123456789",
    department: "ABC",
    totalTickets: 5,
    solved: 2,
    pending: 1,
    inProgress: 2,
    rating: 5,
  };

  const teamMembers = [
    "Operation Name 1",
    "Operation Name 2",
    "Operation Name 3",
  ];

  return (
    <Layout>
      <div className="bg-white font-sanchez min-h-screen">
        <div className="max-w-[1190px] mx-auto py-6 px-4">
          <h2 className="text-2xl mb-4">Performance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 flex items-center gap-4 rounded-lg">
                <div className="w-24 h-24 rounded-lg bg-gray-300 flex items-center justify-center">
                  <FaUser className="w-16 h-16 text-black" />
                </div>
                <div>
                  <h2 className="text-xl">{performanceData.name}</h2>
                  <div className="bg-gray-200 rounded px-4 py-2 mt-2">
                    <p>Contact No: {performanceData.contact}</p>
                    <p>Department: {performanceData.department}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg p-4 shadow-md text-sm">
                <div className="flex justify-between">
                  <span className="font-bold">Total Ticket Handle</span>
                  <span className="font-bold">
                    {performanceData.totalTickets}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Ticket Solved</span>
                  <span>{performanceData.solved}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Ticket Pending</span>
                  <span>{performanceData.pending}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Ticket in progress</span>
                  <span>{performanceData.inProgress}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Rating</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < performanceData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {teamMembers.map((name, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg "
                >
                  <div className="bg-gray-300 p-3 rounded-lg shadow">
                    <FaUser className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span>{name}</span>
                    <button className="mt-1 bg-navbar text-black px-4 py-1 rounded-lg hover:bg-[#3fb9a8] text-sm">
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;
