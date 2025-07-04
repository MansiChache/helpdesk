import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UserDashboard from './pages/UserDashboard';
import OperationDashboard from './pages/OperationDashboard';
import TechDashboard from './pages/TechDashboard';
import NewTicketForm from './pages/NewTicketForm';
import MyTickets from './pages/MyTickets';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/operation/dashboard" element={<OperationDashboard />} />
        <Route path="/tech/dashboard" element={<TechDashboard />} />
         <Route path="/new-ticket" element={<NewTicketForm />} />
         <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;