import React from 'react';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './routes/Routes';
import ContextProvider from './context';

function App() {
  return (
    <Box>
      <ContextProvider>
      <ToastContainer autoClose={3000} />
      <AppRoutes />
      </ContextProvider>
    </Box>
  );
}

export default App;
