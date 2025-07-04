import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, UserCircle } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const goToProfile = () => {
    navigate('/user/profile');
  };
  
  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-[#55D6C2] flex items-center justify-between px-6 shadow-md z-50">
      <h1 className="text-white text-3xl font-bold italic">Helpdesk</h1>
      <div className="flex items-center gap-4">
        <div className="bg-black text-white text-sm px-2 py-1 rounded">BM</div>
        <div className="bg-black text-white text-sm px-2 py-1 rounded">BI</div>
        <Bell className="text-black w-5 h-5" />
         <UserCircle
          className="text-black w-5 h-5 cursor-pointer"
          onClick={goToProfile}
          title="Profile"
        />
         <LogOut
          className="text-black w-5 h-5 cursor-pointer"
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </header>
  );
};

export default Navbar;