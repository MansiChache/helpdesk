import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const [activeSelection, setActiveSelection] = useState('BM');

  const handleToggle = (selection) => {
    setActiveSelection(selection);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const goToProfile = () => {
    navigate('/user/profile');
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[62px] bg-[#55D6C2] flex items-center justify-between px-6 shadow-md z-50">
      <h1 className="text-white text-[47px] font-semibold italic">Helpdesk</h1>
      <div className="flex items-center gap-4">

        <div className="relative rounded-md shadow-sm flex border-4 border-black h-6"> 
          <button
            type="button"
            className={`
              relative w-9 inline-flex items-center justify-center px-4 py-1 text-sm font-medium
              ${activeSelection === 'BM' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-indigo-500'}
              cursor-pointer select-none
              transition-colors duration-200 ease-in-out
            `}
            onClick={() => handleToggle('BM')}
          >
            BM
          </button>
          <button
            type="button"
            className={`
              relative -ml-px w-9 inline-flex items-center justify-center px-4 py-1 text-sm font-medium
              ${activeSelection === 'BI' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-indigo-500'}
              cursor-pointer select-none
              transition-colors duration-200 ease-in-out
            `}
            onClick={() => handleToggle('BI')}
          >
            BI
          </button>
        </div>

        {/* Existing icons */}
        <FaBell className="text-black w-5 h-5"/>
        <FaUserAlt
          className="text-black w-5 h-5 cursor-pointer"
          onClick={goToProfile}
          title="Profile"
        />
        <FaSignOutAlt
          className="text-black w-5 h-5 cursor-pointer"
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </header>
  );
};

export default Navbar;