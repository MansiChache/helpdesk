import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Paperclip } from "lucide-react";

const NewTicketForm = () => {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] bg-white min-h-screen font-sanchez font-medium">
          <div className="max-w-[1190px] mx-auto py-3 px-4">
            <h2 className="text-center text-xl mb-6">Create New Ticket</h2>
            <form className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <label className="w-32 font-medium">Ticket No.</label>
                <input
                  className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                  type="text"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-32 font-medium">Date</label>
                <input className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg" />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-32 font-medium">Name</label>
                <input
                  className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                  type="text"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-32 font-medium">Department</label>
                <input
                  className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                  type="text"
                />
              </div>

              <div className="col-span-2 flex items-center ">
                <label className="w-32 font-medium">Subject</label>
                <input
                  className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                  type="text"
                />
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col  gap-3">
                    <label className="w-32 font-medium">Category</label>
                    <input
                      className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col  gap-3">
                    <label className="w-32 font-medium">Type</label>
                    <input
                      className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col  gap-3">
                    <label className="w-32 font-medium">Priority</label>
                    <input
                      className="bg-gray-200 rounded px-3 py-2 w-full shadow-lg"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="font-medium">Description</label>
                  <textarea
                    className="bg-gray-200 rounded px-3 py-2 w-full pr-10 resize-none shadow-lg h-full"
                    rows="8"
                  />
                  <span className="absolute bottom-3 right-4 text-lg text-gray-600 cursor-pointer shadow-lg bg-navbar p-1 rounded">
                    <Paperclip />
                  </span>
                </div>
              </div>

              {/* ReCAPTCHA and Submit button side-by-side, aligned with form fields */}
              <div className="col-span-2 grid grid-cols-2 gap-6 mt-4">
                {/* I'm not a robot */}
                <div className="flex items-center justify-between bg-white border rounded px-4 py-2 shadow-md w-full">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="robot-check"
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor="robot-check"
                      className="text-sm font-medium"
                    >
                      I'm not a robot
                    </label>
                  </div>
                  <img
                    src="/refresh-icon.png"
                    alt="Refresh"
                    className="w-20 h-10 object-contain"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end items-center">
                  <button
                    type="submit"
                    className="bg-teal-400 text-black px-6 py-2 rounded shadow"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default NewTicketForm;
