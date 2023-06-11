import React from "react";
import { Box, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { styles } from "./style";

function CreateButton({openModal}: any) {
  return (
    <Box sx={styles.containerCreateButton}>
      <Button
        onClick={() => openModal()}
        sx={styles.createButton}
      >
        <AddIcon sx={styles.buttonIcon} />
      </Button>
    </Box>
  );
}

export default CreateButton;
