import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import OrganizationProfile from '../pages/UserProfiles/OrganizationProfile';
import AdminLayouts from './AdminLayouts';
import ProtectRouter from './ProtectRouter';




const AdminRouter = () => {
  return (
    <Routes element={<ProtectRouter />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AdminLayouts />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/organization" element={<OrganizationProfile />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
