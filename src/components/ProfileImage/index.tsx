import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/images/user_chris.jpg";
import { styles } from "./style";

function ProfileImage() {
  return (
    <Box
      sx={styles.profileContainer}
    >
      <img
        alt="user"
        src={photo}
        style={{
          borderRadius: "100px",
          width: "9rem",
          height: "9rem",
        }}
      ></img>

      <Typography
        variant="body1"
        sx={styles.userNameTextContainer}
      >
        Prof. Cristopher
      </Typography>
    </Box>
  );
}

export default ProfileImage;
