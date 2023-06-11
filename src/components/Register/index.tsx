import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import style from './style';
import { HTTPClient } from '../../clients/httpClient';
import { displayErrorMessage, displayInfoMessage, displaySuccessMessage } from '../Notification';

function Register() {
  const styles = style();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = async () => {

    if(!userName || !password || !email){
      displayInfoMessage('Preencha todos os campos corretamente!');
      return;
    }

    const createUserResponse = await HTTPClient.createUser({name: userName, email, password});
    if(createUserResponse.status !== 200){
      displayErrorMessage('Erro ao registrar usuário');
      return;
    }
    displaySuccessMessage('Usuário criado com sucesso!');
    // TODO: direcionar para tela de listagem de serviços
  }

  return (
    <Box sx={styles.form} component="form">
      <TextField
        label="Username"
        required
        sx={styles.formField}
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></TextField>

      <TextField
        label="Email"
        type="email"
        required
        sx={styles.formField}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></TextField>

      <TextField
        label="Senha"
        type="password"
        required
        sx={styles.formField}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></TextField>

      <Button type="submit" onClick={() => register()} sx={styles.submit}>
        Cadastrar
      </Button>
    </Box>
  );
}

export default Register;
