import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectRouter = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  return auth === null ? navigate('/register') : <Outlet />;
};

export default ProtectRouter;
