export const styles = {
  bgContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A408B",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "55% 45%",
    height: "70%",
    width: "70%",
  },

  titleBox: {
    background: "#FFF",
    backgroundSize: "160%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 0%",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px 0 0 10px",
    alignContent: "center",
    aliginItems: "center",
    verticalAlign: "center",
    flexDirection: "column",
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "3rem",
    margin: "0 auto",
  },

  logo: { height: "25rem", width: "25rem", margin: "0 auto" },

  authBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 10px 10px 0",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    background: "#FFF",
  },

  switch: {
    color: "#1A408B",
    fontWeight: "bold",
    "&:hover": {
      background: "none",
      cursor: "pointer",
    },
  },
};
