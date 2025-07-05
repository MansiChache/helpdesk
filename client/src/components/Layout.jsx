import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ role, children }) => {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex flex-col flex-grow min-h-screen ml-[250px]">
        <Navbar />
        <main className="flex-grow bg-white pt-[50px]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
