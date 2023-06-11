import React, { useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import style from './style';
import { HTTPClient } from '../../clients/httpClient';
import 'react-toastify/dist/ReactToastify.css';
import { displayErrorMessage, displaySuccessMessage } from '../Notification';
import {Context} from '../../context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const styles = style();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setUserData,
  } : any = useContext(Context);

  const authUserWithEmailAndPassword = async () => {
    const authUserResponse = await HTTPClient.authUser({email, password});
    if(authUserResponse.status !== 200){
      displayErrorMessage('Verifique seu email e senha');
      return;
    }
    console.log('USER: ', authUserResponse.data);
    displaySuccessMessage('Autenticação bem sucedida!');
    setUserData(authUserResponse.data);
    navigate('/home');
    // TODO : ROTAS AUTENTICADAS
  }

  return (
    <Box sx={styles.form}>
      <TextField label="Email" sx={styles.formField} onChange={(e) => {
        setEmail(e.target.value)
      }}></TextField>
      <TextField label="Senha" sx={styles.formField} type='password' onChange={(e) => {
        setPassword(e.target.value)
      }}></TextField>
      <Button onClick={() => authUserWithEmailAndPassword()} sx={styles.submit}>
        Entrar
      </Button>
    </Box>
  );
}

export default Login;
