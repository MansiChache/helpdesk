import { useEffect, useState } from 'react';
import axios from 'axios';
import TicketCard from '../components/TicketCard';

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/tickets/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid gap-4">
        {tickets.map(ticket => <TicketCard key={ticket._id} ticket={ticket} />)}
      </div>
    </div>
  );
};

export default AdminDashboard;