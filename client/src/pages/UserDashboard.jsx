import Layout from "../components/Layout";
import TicketCard from "../components/TicketCard";

const UserDashboard = () => {
  return (
    <Layout>
      <div className="p-8">
        <h2 className="text-center text-3xl font-sanchez mb-2">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <TicketCard title="Total Tickets" count={12} />
          <TicketCard title="Total Solved" count={8} />
          <TicketCard title="Awaiting Approval" count={2} />
          <TicketCard title="In Progress" count={2} />
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
