import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter from './layouts/AdminRouter';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AdminRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
