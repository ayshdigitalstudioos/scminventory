import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import {
  LocalMall,
  MenuOpenRounded,
} from '@mui/icons-material';
import React from 'react';
import { useAuth } from '../context/authContext';

const Topnav = () => {
  const { currentUser, logout } = useAuth();

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

        <Flex alignItems="center">
          <Popover>
            <PopoverTrigger>
              <span className="px-2 pointer">{currentUser?.username}</span>
            </PopoverTrigger>
            <PopoverTrigger>
              <Avatar
                size="sm"
                name={currentUser?.username}
                src="https://bit.ly/dan-aramov"
                background="black"
                cursor="pointer"
              >
                <AvatarBadge boxSize="1.25em" bg="tomato" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={5}
                gap="1rem"
              >
                <Avatar
                  size="md"
                  name={currentUser?.username}
                  src="https://bit.ly/dan-aramov"
                  background="black"
                />
                {currentUser?.username}
                <Divider />
                <span
                  onClick={logout}
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  Signout
                </span>
              </Flex>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Topnav;
