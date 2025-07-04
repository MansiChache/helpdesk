import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TicketCard from "../components/TicketCard";

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="pt-[70px] pl-[250px] min-h-screen bg-white">
        <div className="p-8">
          <h2 className="text-center text-lg font-semibold mb-8">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <TicketCard
              title="Total Tickets"
              count={12}
              bgColor="#3066BE"
            />
            <TicketCard title="Total Solved" count={8} bgColor="#2AF5FF" />
            <TicketCard
              title="Awaiting Approval"
              count={2}
              bgColor="#F49097"
            />
            <TicketCard title="In Progress" count={2} bgColor="#F5E960" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
