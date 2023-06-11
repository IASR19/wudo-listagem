export default function style() {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },

    formField: {
      pb: "1rem",
      width: "70%",
    },

    submit: {
      background: "#1A408B",
      color: "#FFF",
      fontWeight: "bold",
      width: "70%",
      "&:hover": {
        backgroundColor: "#5580D5",
        cursor: "pointer",
        transform: "scale(1.025)",
      },
    },
  };
}
