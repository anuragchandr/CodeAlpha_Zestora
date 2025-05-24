// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('token'); // Check if token exists
  
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}