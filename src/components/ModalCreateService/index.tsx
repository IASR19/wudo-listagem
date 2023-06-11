import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { Box, Button, TextField, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { displayErrorMessage, displaySuccessMessage } from "../Notification";
import { HTTPClient } from "../../clients/httpClient";
import {Context} from '../../context';
import { styles } from "./style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "70%",
  },
};

function ModalCreateService({ closeModal, modalIsOpen }: any) {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const {
    userData,
  } : any = useContext(Context);

  const registerService = async () => {
    const userId = userData.userId;
    const userName = userData.name;
    const authUserResponse = await HTTPClient.createService({
      name: serviceName, 
      description: serviceDescription, 
      ownerId: userId, 
      ownerName: userName,
    });
    if(authUserResponse.status !== 200){
      displayErrorMessage('Falha ao criar o serviço!');
      return;
    }
    displaySuccessMessage('Serviço disponibilizado!');
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Criar serviços"
      style={customStyles}
    >
      <Box
        sx={styles.formBox}
      >
        <Box sx={styles.closeContainer}>
          <Button
            onClick={closeModal}
            sx={styles.closeButton}
          >
            <CloseIcon sx={styles.closeIcon} />
          </Button>
        </Box>
        <TextField
          label="Nome do Serviço"
          sx={styles.inputServiceName}
          onChange={(e) => {
            setServiceName(e.target.value);
          }}
        ></TextField>
        <TextField
          label="Descrição"
          id="outlined-multiline-static"
          multiline
          rows={13}
          sx={styles.inputDescription}
          onChange={(e) => {
            setServiceDescription(e.target.value);
          }}
        ></TextField>
        <Box
          sx={styles.registerServiceButtonContainer}
        >
          <Button
            sx={styles.registerServiceButton}
            onClick={() => registerService()}
          >
            Registrar Serviço
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalCreateService;
