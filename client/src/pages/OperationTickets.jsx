import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Pencil, X } from 'lucide-react';

const OperationTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      id: 'OP001',
      subject: 'Access Issue',
      category: 'Login',
      priority: 'High',
      date: '2025-07-01',
      status: 'In Progress',
      person: 'John Doe',
    },
    {
      id: 'OP002',
      subject: 'Hardware Issue',
      category: 'Device',
      priority: 'Medium',
      date: '2025-07-02',
      status: 'On Hold',
      person: 'Alice',
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-green-200 text-green-800';
      case 'On Hold': return 'bg-blue-200 text-blue-800';
      case 'Closed': return 'bg-gray-300 text-gray-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex">
      <Sidebar role="operation" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] min-h-screen bg-gray-50">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <h2 className="text-xl font-bold mb-4">Operations - My Tickets</h2>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="py-3 px-4">Ticket No</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Priority</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Person-In-Charge</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map(ticket => (
                    <tr
                      key={ticket.id}
                      className="border-b hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="py-3 px-4 text-blue-600 underline" onClick={() => setSelectedTicket(ticket)}>{ticket.id}</td>
                      <td className="py-3 px-4">{ticket.subject}</td>
                      <td className="py-3 px-4">{ticket.category}</td>
                      <td className="py-3 px-4">{ticket.priority}</td>
                      <td className="py-3 px-4">{ticket.date}</td>
                      <td className={`py-3 px-4 ${getStatusColor(ticket.status)} rounded`}>{ticket.status}</td>
                      <td className="py-3 px-4">{ticket.person}</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 flex items-center gap-1">
                          <Pencil size={16} /> Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal */}
            {selectedTicket && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg w-96 shadow relative">
                  <button className="absolute top-2 right-2" onClick={() => setSelectedTicket(null)}>
                    <X />
                  </button>
                  <h3 className="text-lg font-bold mb-4">Ticket Details</h3>
                  <p><strong>ID:</strong> {selectedTicket.id}</p>
                  <p><strong>Subject:</strong> {selectedTicket.subject}</p>
                  <p><strong>Category:</strong> {selectedTicket.category}</p>
                  <p><strong>Priority:</strong> {selectedTicket.priority}</p>
                  <p><strong>Date:</strong> {selectedTicket.date}</p>
                  <p><strong>Status:</strong> {selectedTicket.status}</p>
                  <p><strong>Person-In-Charge:</strong> {selectedTicket.person}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Update
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationTickets;
