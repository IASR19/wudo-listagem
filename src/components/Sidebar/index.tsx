import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProfileImage from "../ProfileImage";
import NavBar from "../NavBar";

import logo from "../../assets/images/logoWuDo.png";
import { HTTPClient } from "../../clients/httpClient";

import { styles } from "./style";

function Sidebar() {
  const [servicesList, setServicesList] = useState(null);

  useEffect(() => {
    HTTPClient.listServices(setServicesList);
  }, []);

  return (
      <Box sx={styles.sidebarContainer}>
        <Box sx={styles.profileContainer}>
          <ProfileImage></ProfileImage>
        </Box>
        
        <Box>
          <NavBar />
        </Box>

        {/* LOGO BOTTOM SIDEBAR*/}

        <Box>
          <img
            alt="logo"
            src={logo}
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "2rem",
              margin: "0 auto",
              width: "4rem",
              height: "4rem",
              background: "#FFF",
              borderRadius: "100%",
            }}
          ></img>
        </Box>
      </Box>
  );
}

export default Sidebar;
