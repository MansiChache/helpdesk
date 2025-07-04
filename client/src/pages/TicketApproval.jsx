import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Check, X, RefreshCcw, Plus, XCircle, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const TicketApproval = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [modalType, setModalType] = useState("");
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [entries, setEntries] = useState(5);

  const modalRef = useRef();

  const tickets = [
    {
      id: "1234",
      subject: "Network Down",
      category: "Network",
      priority: "High",
      date: "2025-07-05",
      name: "John Doe",
      dept: "IT",
      title: "Internet Issue",
      description: "No internet connection since morning.",
      type: "Incident",
      status: "Pending",
      attachments: "N/A",
    },
    {
      id: "1124",
      subject: "New ticket issue",
      category: "Access issue",
      priority: "Medium",
      date: "2021-08-14",
      name: "John Doe",
      dept: "IT",
      title: "Internet Issue",
      description: "No internet connection since morning.",
      type: "Incident",
      status: "Pending",
      attachments: "N/A",
    },
    {
      id: "1224",
      subject: "New request",
      category: "Feedback",
      priority: "Low",
      date: "2021-08-13",
      name: "John Doe",
      dept: "IT",
      title: "Internet Issue",
      description: "No internet connection since morning.",
      type: "Incident",
      status: "Pending",
      attachments: "N/A",
    },
    {
      id: "1244",
      subject: "Ticket submission",
      category: "Ticketing",
      priority: "High",
      date: "2021-08-17",
      name: "John Doe",
      dept: "IT",
      title: "Internet Issue",
      description: "No internet connection since morning.",
      type: "Incident",
      status: "Pending",
      attachments: "N/A",
    },
    {
      id: "1114",
      subject: "Login issue",
      category: "Access issue",
      priority: "High",
      date: "2021-08-03",
      name: "John Doe",
      dept: "IT",
      title: "Internet Issue",
      description: "No internet connection since morning.",
      type: "Incident",
      status: "Pending",
      attachments: "N/A",
    },
  ];

  const assignOptions = ["Alice", "Bob", "Charlie"];

  const openTicketModal = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeTicketModal = () => {
    setSelectedTicket(null);
    setModalType("");
    setUpdateModalOpen(false);
  };

  const openUpdateModal = (type) => {
    setModalType(type);
    setUpdateModalOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeTicketModal();
    }
  };

  useEffect(() => {
    if (selectedTicket || isUpdateModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [selectedTicket, isUpdateModalOpen]);

  const filteredTickets = tickets
    .filter((t) => t.id.toLowerCase().includes(search.toLowerCase()))
    .slice(0, entries);

  return (
    <div className="flex">
      <Sidebar role="operation" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] min-h-screen bg-gray-50 font-sanchez">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <h2 className="text-2xl mb-4">Ticket Approval</h2>

            <div className="flex flex-col justify-between mb-4 gap-4">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Find Ticket"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-5 pr-4 py-2 bg-gray-200 rounded w-64"
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-600"
                  size={18}
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="font-medium">Show</label>
                <select
                  className="border border-gray-300 rounded bg-gray-200 px-2 py-1"
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                >
                  {[5, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <span className="ml-1">Entries</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto mt-4">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-transparent">
                    <th className="py-3 px-6">Ticket No</th>
                    <th className="py-3 px-6">Subject</th>
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Priority</th>
                    <th className="py-3 px-6">Date</th>
                    <th className="py-3 px-6">Action</th>
                    <th className="py-3 px-6">Assign To</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket, index) => (
                    <tr
                      key={ticket.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100 cursor-pointer border-b`}
                    >
                      <td
                        className="py-3 px-6  text-blue-600 underline"
                        onClick={() => openTicketModal(ticket)}
                      >
                        {ticket.id}
                      </td>
                      <td className="py-3 px-6">{ticket.subject}</td>
                      <td className="py-3 px-6">{ticket.category}</td>
                      <td className="py-3 px-6">
                        <span className="px-2 py-1">{ticket.priority}</span>
                      </td>
                      <td className="py-3 px-6">{ticket.date}</td>
                      <td className="py-3 px-6 flex gap-2">
                        <Check
                          className="text-green-600 cursor-pointer"
                          onClick={() =>
                            alert(`Assigning approver for ticket ${ticket.id}`)
                          }
                        />
                        <X
                          className="text-red-600 cursor-pointer"
                          onClick={() => alert(`Removing ticket ${ticket.id}`)}
                        />
                      </td>

                      <td className="py-3 px-6">
                        <select className="border p-1 rounded">
                          {assignOptions.map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </select>
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

            {selectedTicket && !isUpdateModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div
                  ref={modalRef}
                  className="bg-white p-6 rounded-lg w-[600px] relative"
                >
                  <XCircle
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                    onClick={closeTicketModal}
                  />
                  <h3 className="text-lg font-semibold mb-4">Ticket Details</h3>
                  {Object.entries(selectedTicket).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  ))}
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => openUpdateModal("update")}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => openUpdateModal("close")}
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isUpdateModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div
                  ref={modalRef}
                  className="bg-white p-0 rounded-lg w-[700px] overflow-hidden relative"
                >
                  <XCircle
                    className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                    onClick={closeTicketModal}
                  />
                  <div className="bg-[#55D6C2] p-6 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Ticket Number"
                        className="p-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Team Name"
                        className="p-2 rounded"
                      />
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Team Members"
                          className="p-2 rounded w-full"
                        />
                        <Plus className="text-black cursor-pointer" />
                      </div>
                    </div>
                    <div>
                      <textarea
                        placeholder="Remarks"
                        className="w-full p-2 rounded h-full"
                      ></textarea>
                    </div>
                    <div className="col-span-2 flex justify-end items-center gap-3 mt-4">
                      <RefreshCcw className="text-black cursor-pointer" />
                      <button className="bg-gray-400 text-white px-6 py-2 rounded">
                        {modalType === "update"
                          ? "Create Team"
                          : "Close Ticket"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketApproval;
