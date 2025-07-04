import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Star, X, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const MyTickets = () => {
  const [search, setSearch] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [entries, setEntries] = useState(5);

  const tickets = [
    { id: '1234', subject: 'Login issue', status: 'In Progress', date: '2021-08-13', supportBy: 'Tech Support', rating: 0 },
    { id: '1124', subject: 'New ticket issue', status: 'On Hold', date: '2021-08-14', supportBy: 'Operation Team', rating: 4 },
    { id: '1224', subject: 'New request', status: 'Closed', date: '2021-08-13', supportBy: 'Tech Support', rating: 3 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-customLightGreen text-black';
      case 'On Hold': return 'bg-customDarkBlue text-white';
      case 'Closed': return 'bg-gray-600 text-white';
       
    }
  };

  const filteredTickets = tickets
    .filter(t => t.id.toLowerCase().includes(search.toLowerCase()))
    .slice(0, entries);

  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] min-h-screen bg-gray-50 font-sanchez">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            
            <h2 className="text-2xl font-medium text-center mb-6">List of Tickets</h2>

            <div className="flex flex-col justify-between mb-4 gap-4">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Find Ticket"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-5 pr-4 py-2 bg-gray-200 rounded w-64"
                />
                <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />
              </div>

              <div className="flex items-center gap-2">
                <label className="font-medium">Show</label>
                <select
                  className="border border-gray-300 rounded bg-gray-200 px-2 py-1"
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                >
                  {[5, 10, 15, 20].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span className="ml-1">Entries</span>
              </div>

              
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-gray-700">
                    <th className="py-3 px-6">Ticket No</th>
                    <th className="py-3 px-6">Subject</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Date</th>
                    <th className="py-3 px-6">Support By</th>
                    <th className="py-3 px-6">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket, index) => (
                    <tr
                      key={ticket.id}
                      className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 cursor-pointer`}
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <td className="py-3 px-6 font-medium text-blue-600 underline">{ticket.id}</td>
                      <td className="py-3 px-6">{ticket.subject}</td>
                      <td className="py-3 px-6">
                        <span className={`px-2 py-1 rounded text-sm ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-3 px-6">{ticket.date}</td>
                      <td className="py-3 px-6">{ticket.supportBy}</td>
                      <td className="py-3 px-6 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < ticket.rating ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <p>
                Showing 1 to {filteredTickets.length} of {tickets.length} entries
              </p>
              <div className="flex items-center">
                <ChevronsLeft />
                <button className="rounded hover:bg-gray-200">
                  <ChevronLeft size={18} />
                </button>
                1
                <button className="rounded hover:bg-gray-200">
                  <ChevronRight size={18} />
                </button>
                <ChevronsRight />
              </div>
            </div>

            {/* Modal */}
            {selectedTicket && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50" onClick={closeModal}>
                <div className="bg-white p-6 rounded-lg shadow-md relative w-[90%] max-w-md" onClick={(e) => e.stopPropagation()}>
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal}>
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
