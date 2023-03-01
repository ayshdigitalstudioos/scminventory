import React from 'react';
import Topnav from '../components/Topnav';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import PageHeader from '../components/PageHeader';

const AdminLayouts = () => {

  return (
    <Box className="adminlayout">
      <Sidebar />
      <Box direction="column" className="maincomponents">
        <Topnav />
        <Box className="mainlayout" px={4} py={2}>
          <PageHeader/>
          <Outlet/>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayouts;
