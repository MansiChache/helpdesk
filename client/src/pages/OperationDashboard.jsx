import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TicketCard from "../components/TicketCard";
import { BarChart2, Headphones, Users, Star, User } from "lucide-react";
import { FaUser, FaUserCog } from "react-icons/fa";

const OperationTeamDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="operation" />
      <div className="flex flex-col w-full ml-[250px]min-h-screen">
        <Navbar />
        <div className="pt-[50px] pl-[250px] bg-white min-h-screen">
          <div className="max-w-[1190px] mx-auto pt-6  px-4">
            <h2 className=" text-3xl font-sanchez mb-2 ">Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <TicketCard title="Total Tickets" count={12} bgColor="#296EF2" />
              <TicketCard title="Total Solved" count={8} bgColor="#0BFF68" />
              <TicketCard
                title="Awaiting Approval"
                count={2}
                bgColor="#FE594E"
              />
              <TicketCard title="In Progress" count={2} bgColor="#FCFF6C" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              <div className="bg-navbar shadow-md p-6 flex items-center justify-center rounded-md border border-gray-200">
                <BarChart2 className="w-24 h-24 text-black" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-navbar shadow-md p-6 flex items-center justify-center rounded-md border border-gray-200 text-black font-sanchez">
                  <div className="flex gap-20">
                    <div className="flex flex-col items-center text-center">
                      <FaUser className="w-12 h-12 mb-2" />
                      <div className="text-3xl text-customDarkBlue">3</div>
                      <div className="text-lg">
                        Technical Supports
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <FaUserCog className="w-14 h-12 mb-2 text-black" />
                      <div className="text-3xl text-customDarkBlue">4</div>
                      <div className="text-lg ">
                        Operation Teams
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navbar shadow-md p-6 flex flex-col items-center justify-center rounded-md border border-gray-200 text-black">
                  <h3 className="text-center text-lg mb-2">
                    Customer Feedback
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-white w-6 h-6"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OperationTeamDashboard;
