import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Star, X } from 'lucide-react';

const MyTickets = () => {
  const [search, setSearch] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { id: 'T001', subject: 'Login issue', status: 'In Progress', date: '2025-07-01', supportBy: 'John', rating: 4 },
    { id: 'T002', subject: 'Error on dashboard', status: 'On Hold', date: '2025-07-02', supportBy: 'Alice', rating: 5 },
    { id: 'T003', subject: 'Unable to submit form', status: 'Closed', date: '2025-07-02', supportBy: 'Bob', rating: 3 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-green-200 text-green-800';
      case 'On Hold': return 'bg-blue-200 text-blue-800';
      case 'Closed': return 'bg-gray-300 text-gray-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTickets = tickets.filter(t => t.id.toLowerCase().includes(search.toLowerCase()));

  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] min-h-screen bg-gray-50">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <h2 className="text-xl font-bold mb-4">My Tickets</h2>
            <input
              type="text"
              placeholder="Find Ticket"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 px-4 py-2 border rounded w-1/2"
            />

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="py-3 px-6">Ticket No</th>
                    <th className="py-3 px-6">Subject</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Date</th>
                    <th className="py-3 px-6">Support By</th>
                    <th className="py-3 px-6">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map(ticket => (
                    <tr
                      key={ticket.id}
                      className="border-b hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <td className="py-3 px-6 font-medium text-blue-600 underline">{ticket.id}</td>
                      <td className="py-3 px-6">{ticket.subject}</td>
                      <td className={`py-3 px-6 ${getStatusColor(ticket.status)} rounded`}>{ticket.status}</td>
                      <td className="py-3 px-6">{ticket.date}</td>
                      <td className="py-3 px-6">{ticket.supportBy}</td>
                      <td className="py-3 px-6 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < ticket.rating ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedTicket && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-md relative w-[90%] max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={closeModal}
                  >
                    <X />
                  </button>
                  <h3 className="font-bold text-lg mb-4">Ticket Details</h3>
                  <p><strong>ID:</strong> {selectedTicket.id}</p>
                  <p><strong>Subject:</strong> {selectedTicket.subject}</p>
                  <p><strong>Status:</strong> {selectedTicket.status}</p>
                  <p><strong>Date:</strong> {selectedTicket.date}</p>
                  <p><strong>Support By:</strong> {selectedTicket.supportBy}</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;