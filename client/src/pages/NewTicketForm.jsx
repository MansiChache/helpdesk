import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const NewTicketForm = () => {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-[70px] pl-[250px] bg-white min-h-screen">
          <div className="max-w-[1190px] mx-auto py-6 px-4">
            <h2 className="text-center text-xl font-semibold mb-6">Create New Ticket</h2>
            <form className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Ticket No.</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter ticket number" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Date</label>
                <input className="border rounded px-3 py-2" type="date" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Name</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter name" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Department</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter department" />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="font-medium mb-1">Subject</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter subject" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Category</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter category" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Description</label>
                <textarea className="border rounded px-3 py-2" rows="3" placeholder="Enter description" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Type</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter type" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Priority</label>
                <input className="border rounded px-3 py-2" type="text" placeholder="Enter priority" />
              </div>
              <div className="col-span-2 flex items-center gap-4">
                <input type="checkbox" id="recaptcha" />
                <label htmlFor="recaptcha">I'm not a robot</label>
              </div>
              <div className="col-span-2 text-center">
                <button type="submit" className="bg-teal-400 text-white px-6 py-2 rounded shadow">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicketForm;