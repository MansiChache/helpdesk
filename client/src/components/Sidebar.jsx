import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FilePlus, ListOrdered } from 'lucide-react';

const Sidebar = ({ role }) => {
  const dashboardPath = role === 'operation' ? '/operation/dashboard' : '/user/dashboard';

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 font-semibold cursor-pointer hover:text-blue-600 ${isActive ? 'text-blue-600 font-bold' : 'text-black'}`;

  return (
    <aside className="fixed top-[70px] left-0 w-[250px] h-[calc(100vh-70px)] bg-gray-200 p-4 shadow-md z-40">
      <nav className="flex flex-col gap-6">
        <NavLink to={dashboardPath} className={linkClasses}>
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </NavLink>

        <NavLink to="/new-ticket" className={linkClasses}>
          <FilePlus className="w-5 h-5" /> New Ticket
        </NavLink>

        <NavLink to="/my-tickets" className={linkClasses}>
          <ListOrdered className="w-5 h-5" /> My Ticket
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;