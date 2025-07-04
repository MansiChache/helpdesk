import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TicketCard from "../components/TicketCard";
import Footer from '../components/Footer';

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="pt-[50px] pl-[250px] min-h-screen bg-white">
        <div className="p-8">
          <h2 className="text-center text-3xl font-sanchez mb-2  ">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <TicketCard
              title="Total Tickets"
              count={12}
              bgColor="#296EF2"
            />
            <TicketCard title="Total Solved" count={8} bgColor="#0BFF68" />
            <TicketCard
              title="Total Awaiting Approval"
              count={2}
              bgColor="#FE594E"
            />
            <TicketCard title="Total In Progress" count={2} bgColor="#FCFF6C" />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default UserDashboard;
