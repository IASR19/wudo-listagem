import { Box, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import SettingsIcon from "@mui/icons-material/Settings";
import { styles } from "./style";

function NavBar() {
  return (
    <Box
      sx={styles.navbarContainer}
    >
      <Box
        sx={styles.navbarCard}
      >
        <HomeIcon sx={styles.navbarIcon} />
        <Typography variant="body1" fontWeight="bold">
          Página Inicial
        </Typography>
      </Box>

      <Box
        sx={styles.navbarCard}
      >
        <HandymanIcon  sx={styles.navbarIcon} />
        <Typography variant="body1" fontWeight="bold">
          Meus serviços
        </Typography>
      </Box>
      <Box
        sx={styles.navbarCard}
      >
        <BrowserUpdatedIcon  sx={styles.navbarIcon} />
        <Typography variant="body1" fontWeight="bold">
          Serviços solicitados
        </Typography>
      </Box>
      <Box
        sx={styles.navbarCard}
      >
        <SettingsIcon  sx={styles.navbarIcon} />
        <Typography variant="body1" fontWeight="bold">
          Configurações
        </Typography>
      </Box>
    </Box>
  );
}

export default NavBar;
