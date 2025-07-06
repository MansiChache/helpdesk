import Layout from "../components/Layout";

const EditProfile = () => {
  return (
    <Layout>
      <div className="max-w-[1190px] mx-auto py-6 px-4 font-sanchez">
        <h2 className="text-3xl mb-6">User Profile</h2>
        <button className="bg-navbar text-blacktext-lg py-2 px-6">
          Edit Account
        </button>
        <div className="bg-customGrey bg-opacity-20 shadow-md">
          <div className="flex border-b"></div>

          <form>
            {[
              "Username",
              "Current Password",
              "New Password",
              "Confirm Password",
              "Email",
              "Real Name",
              "Access Level",
              "Project Access Level",
            ].map((label, idx) => (
              <div key={idx} className="flex items-end w-full mb-1">
                <label className="w-1/2 bg-tableGreyD text-white py-2 px-4 text-md">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-1/2 bg-white py-2 px-4 border-b border-white outline-none text-sm"
                />
              </div>
            ))}

            <div className="flex justify-start bg-gray-300 p-2 mt-2">
              <button
                type="submit"
                className="bg-navbar hover:bg-[#3ccbb5] text-black px-6 py-2 rounded"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
