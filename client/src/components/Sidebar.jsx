import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  ListOrdered,
  CheckCircle,
  BarChart2,
  ChevronRight,
  TicketPlus, Tickets
} from "lucide-react";

const Sidebar = () => {
  const role = localStorage.getItem("userRole");

  let dashboardPath = "/user/dashboard";
  if (role === "operation") dashboardPath = "/operation/dashboard";
  else if (role === "tech") dashboardPath = "/tech/dashboard";

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 cursor-pointer font-sanchez text-[20px] `;

  return (
    <aside className="fixed top-[62px] left-0 w-[250px] h-[calc(100vh-62px)] bg-gray-200 p-4 shadow-md z-40">
      <nav className="flex flex-col gap-6 ">
        <NavLink to={dashboardPath} className={linkClasses}>
          {({ isActive }) => (
            <>
              {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </>
          )}
        </NavLink>

        <NavLink to="/my-tickets" className={linkClasses}>
          {({ isActive }) => (
            <>
              {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
              <Tickets className="w-5 h-5" /> My Ticket
            </>
          )}
        </NavLink>

        {role === "operation" && (
          <>
            <NavLink to="/ticket-approval" className={linkClasses} end>
              {({ isActive }) => (
                <>
                  {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
                  <CheckCircle className="w-5 h-5" /> Ticket Approval
                </>
              )}
            </NavLink>

            <NavLink to="/performance" className={linkClasses} end>
              {({ isActive }) => (
                <>
                  {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
                  <BarChart2 className="w-5 h-5" /> Performance
                </>
              )}
            </NavLink>
          </>
        )}

        {role === "tech" && (
          <NavLink to="/performance" className={linkClasses} end>
            {({ isActive }) => (
              <>
                {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
                <BarChart2 className="w-5 h-5" /> Performance
              </>
            )}
          </NavLink>
        )}

        {role === "user" && (
          <NavLink to="/new-ticket" className={linkClasses}>
            {({ isActive }) => (
              <>
                {isActive && <ChevronRight className="w-5 h-5 mr-1" />}
                <TicketPlus className="w-5 h-5" /> New Ticket
              </>
            )}
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
