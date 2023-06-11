import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProfileImage from "../../components/ProfileImage";
import NavBar from "../../components/NavBar";

import CreateButton from "../../components/CreateButton";

import logo from "../../assets/images/logoWuDo.png";
import ModalCreateService from "../../components/ModalCreateService";
import { HTTPClient } from "../../clients/httpClient";

import { styles } from "./style";
import Sidebar from "../../components/Sidebar";

function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [servicesList, setServicesList] = React.useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    HTTPClient.listServices(setServicesList);
  }, []);

  return (
    <Box sx={styles.homeContainer}>
      <Sidebar/>

      {/* Components */}
      <Box
        sx={styles.componentsContainer}
      ></Box>

      {/* BOTAO +--- */}
      <Box>
        <CreateButton openModal={openModal} />
      </Box>
      {/* POP UP */}
      <ModalCreateService closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </Box>
  );
}

export default Home;
