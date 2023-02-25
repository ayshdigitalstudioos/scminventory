import { Box, Button, Flex } from '@chakra-ui/react';
import { CloseRounded, LocalMall } from '@mui/icons-material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarData from './SiderbarData.json';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box className="sidebar" background="#21263C">
      <Box position="sticky" top="0" zIndex="3">
        <Box
          className="offcanvas-lg offcanvas-start"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <Flex width="100%" alignItems="center">
            <Box
              className="offcanvas-header"
              background="#181c2e"
              px={4}
              py={4}
            >
              <Button
                type="button"
                className="mx-1 px-2"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              >
                <CloseRounded />
              </Button>
            </Box>
            <Box
              background="#181c2e"
              px={4}
              py={4}
              position="sticky"
              top="0"
              zIndex="1"
              color="white"
              width="100%"
            >
              <LocalMall /> InventoryApp
            </Box>
          </Flex>
          <Box className="offcanvas-body sidebarmenu " mx={2} my={2}>
            {SidebarData.map((menuitems, index) => {
              return (
                <Link
                  key={index}
                  to={menuitems.path}
                  className={
                    menuitems.path === location.pathname
                      ? 'navLink active'
                      : 'navLink'
                  }
                >
                  <i className={menuitems.icon}></i>
                  <span>{menuitems.title}</span>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
