import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('User'));
  return user && user.isValidUser ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
