import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';
import { CloseRounded, LocalMall } from '@mui/icons-material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SiderbarData';

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
                className="mx-1 px-1"
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
              py={2}
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
            <Accordion allowMultiple>
              {SidebarData.map((menuitems, index) => {
                return (
                  <AccordionItem key={index} border="none" color={'white'}>
                    <Link to={menuitems.path}>
                      <AccordionButton
                        className={
                          menuitems.path === location.pathname
                            ? 'navLink active'
                            : 'navLink'
                        }
                      >
                        <Flex gap={3} alignItems="center" flex="1">
                          <i className={menuitems.icon}></i>
                          {menuitems.title}
                        </Flex>
                        {menuitems.subNav ? <AccordionIcon /> : ''}
                      </AccordionButton>
                    </Link>
                    {menuitems.subNav ? (
                      <AccordionPanel padding="0">
                        {menuitems.subNav.map((submenu, index) => {
                          return (
                            <Link key={index} to={submenu.path}>
                              <Flex
                                gap={3}
                                alignItems="center"
                                className={
                                  submenu.path === location.pathname
                                    ? 'subnavLink active'
                                    : 'subnavLink'
                                }
                              >
                                <i className={submenu.icon}></i>
                                {submenu.title}
                              </Flex>
                            </Link>
                          );
                        })}
                      </AccordionPanel>
                    ) : (
                      ''
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
