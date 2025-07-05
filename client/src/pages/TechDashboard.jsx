import Layout from "../components/Layout";
import TicketCard from "../components/TicketCard";
import { BarChart2, Headphones, Users, Star } from "lucide-react";

const TechnicalTeamDashboard = () => {
  return (
    <Layout role="tech">
      <div className="max-w-[1190px] mx-auto py-6 px-4">
        <h2 className="text-center text-xl font-semibold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <TicketCard title="Total Tickets" count={12} />
          <TicketCard title="Total Solved" count={8} />
          <TicketCard title="Awaiting Approval" count={2} />
          <TicketCard title="In Progress" count={2} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 flex items-center justify-center rounded-md border border-gray-200">
            <BarChart2 className="w-24 h-24 text-gray-600" />
          </div>
          <div className="bg-white shadow-md p-6 flex flex-col items-center justify-center rounded-md border border-gray-200">
            <div className="flex items-center gap-4 mb-2">
              <Headphones className="w-10 h-10 text-gray-600" />
              <span className="text-lg font-semibold">
                3 Technical Supports
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 text-gray-600" />
              <span className="text-lg font-semibold">4 Operation Team</span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 flex flex-col items-center justify-center rounded-md border border-gray-200">
            <h3 className="font-semibold text-center mb-2">
              Customer Feedback
            </h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 w-6 h-6"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalTeamDashboard;
