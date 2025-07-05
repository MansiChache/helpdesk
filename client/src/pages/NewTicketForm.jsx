import { Paperclip } from "lucide-react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const NewTicketForm = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="bg-white font-sanchez font-medium">
        <div className="max-w-[1190px] mx-auto py-6 px-4">
          <h2 className="text-center text-2xl mb-6">Create New Ticket</h2>
          <form className="grid grid-cols-2 gap-x-12 gap-y-3">
            <div className="flex items-center gap-3">
              <label className="w-32 font-medium">Ticket No.</label>
              <input
                className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                type="text"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="w-32 font-medium">Date:</label>
              <input className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg" />
            </div>

            <div className="flex items-center gap-x-3 gap-y-3">
              <label className="w-32 font-medium">Name:</label>
              <input
                className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                type="text"
              />
            </div>

            <div className="flex items-center gap-x-3 gap-y-3">
              <label className="w-32 font-medium">Department:</label>
              <input
                className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                type="text"
              />
            </div>

            <div className="col-span-2 flex flex-col gap-x-3">
              <label className="w-32 font-medium">Subject:</label>
              <input
                className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                type="text"
              />
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-x-6 gap-y-3">
              <div className="flex flex-col gap-x-4 gap-y-5">
                <div className="flex flex-col  gap-x-3">
                  <label className="w-32 font-medium">Category:</label>
                  <input
                    className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                    type="text"
                  />
                </div>

                <div className="flex flex-col  gap-x-3">
                  <label className="w-32 font-medium">Type:</label>
                  <input
                    className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                    type="text"
                  />
                </div>

                <div className="flex flex-col  gap-x-3">
                  <label className="w-32 font-medium">Priority:</label>
                  <input
                    className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full shadow-lg"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-x-2 relative col-span-2">
                <label className="font-medium">Description:</label>
                <textarea
                  className="bg-customGrey bg-opacity-20 rounded-lg px-3 py-2 w-full pr-10 resize-none shadow-lg h-full"
                  rows="8"
                />
                <span className="absolute bottom-3 right-4 text-lg text-gray-600 cursor-pointer shadow-lg bg-navbar p-1 rounded">
                  <Paperclip />
                </span>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-center justify-between bg-white border rounded px-4 py-4 shadow-md w-full">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="robot-check" className="w-10 h-6" />
                  <label htmlFor="robot-check" className="text-md font-medium">
                    I'm not a robot
                  </label>
                </div>
                <img
                  src="/refresh-icon.png"
                  alt="Refresh"
                  className="w-20 h-13 object-contain"
                />
              </div>

              <div className="flex justify-end items-center pt-12">
                <button
                  type="submit"
                  onClick={() => navigate("/my-tickets")}
                  className="bg-navbar text-black px-12 py-2 rounded shadow"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewTicketForm;
