export const styles = {
  formBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  closeContainer: { width: "100%", display: "flex" },

  closeButton: {
    ml: "93%",
    background: "#FF0000",
    borderRadius: "10%",
    width: "1px",
    heigh: "1px",
    "&:hover": {
      background: "#F68282",
    },
  },

  closeIcon: { color: "#FFF" },

  inputServiceName: {
    mt: "1rem",
    mb: "1rem",
  },

  inputDescription: {
    mt: "1rem",
    mb: "1rem",
  },

  registerServiceButtonContainer: {
    width: "100%",
    backgroundColor: "#1A408B",
    borderRadius: "10px",
    margin: "0 auto",
    textAlign: "center",
    "&:hover": {
      background: "#4670BD",
    },
  },

  registerServiceButton: {
    color: "#FFF",
    width: "100%",
    fontWeight: "bold",
  },
};
