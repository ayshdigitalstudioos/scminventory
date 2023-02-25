import { Box, Button, Flex } from '@chakra-ui/react';
import {
  ExitToAppRounded,
  LocalMall,
  MenuOpenRounded,
} from '@mui/icons-material';
import React from 'react';

const Topnav = () => {
  return (
    <Box
      background="#f7f7fe"
      px={4}
      py={2}
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Flex direction="row" alignItems="center" justify="space-between">
        <Flex>
          <Button
            className="mx-1 px-2 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <MenuOpenRounded />
          </Button>
          <Flex
            direction="row"
            alignItems="center"
            gap={2}
            className="d-lg-none"
          >
            <LocalMall /> InventoryApp
          </Flex>
        </Flex>
        <Flex>
          <Button className="mx-1 px-2">
            <ExitToAppRounded />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Topnav;
