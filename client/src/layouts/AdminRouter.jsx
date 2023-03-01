import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/Dashboard';
import Wrongpage from '../pages/404/Wrongpage';
import ProtectRouter from './ProtectRouter';
import Items from '../pages/InventoryMenu/Items/Items';
import Itemgroup from '../pages/InventoryMenu/Itemgroup/Itemgroup';
import Adjestments from '../pages/InventoryMenu/InventoryAdjestments/Adjestments';
import TransferOrders from '../pages/InventoryMenu/Transferorder/TransferOrders';
import User from '../pages/User';

const AdminRouter = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/register"
        element={currentUser?.username ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/login"
        element={currentUser?.username ? <Navigate to="/" /> : <Login />}
      />
      <Route element={<ProtectRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="inventory/items" element={<Items />} />
        <Route path="inventory/itemgroup" element={<Itemgroup />} />
        <Route path="inventory/adjustments" element={<Adjestments />} />
        <Route path="inventory/transferorders" element={<TransferOrders />} />
        <Route path="inventory/items" element={<Items />} />
        <Route path="inventory/items" element={<Items />} />
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="*" element={<Wrongpage />} />
    </Routes>
  );
};

export default AdminRouter;
