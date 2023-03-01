import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import AdminLayouts from './AdminLayouts';

const ProtectRouter = () => {
  const { currentUser } = useAuth();
  return (
    currentUser?.username ? <AdminLayouts/> : <Navigate to='/login' replace/>
  )
};

export default ProtectRouter;
