import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Login from '../../components/Login';
import Register from '../../components/Register';
import {styles} from './style';

import logo from '../../assets/images/b_logo_white.png'

function Authentication() {
  const [haveToRegister, setHaveToRegister] = useState(false);

  return (
    <Box sx={styles.bgContainer}>
      <Box sx={styles.container}>
        <Box sx={styles.titleBox}>
          
          <img src={logo} style={styles.logo} alt='WuDo'></img>
        </Box>

        <Box sx={styles.authBox}>
          {haveToRegister ? <Register /> : <Login />}
          <Typography>ou</Typography>
          <Typography onClick={() => setHaveToRegister(!haveToRegister)} sx={styles.switch}>
            {haveToRegister ? 'Entrar' : 'Cadastre-se'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Authentication;
