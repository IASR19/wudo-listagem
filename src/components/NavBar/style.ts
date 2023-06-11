export const styles = {
  navbarContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  navbarCard: {
    background: "#FFF",
    width: "80%",
    minHeight: "10%",
    borderRadius: "10px",
    textAlign: "center",

    color: "#8ba1d0",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "20px",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navbarIcon: { color: "#8ba1d0", marginRight: "5px" },
};
