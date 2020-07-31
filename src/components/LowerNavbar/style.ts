import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  lowerContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
    margin: "auto",
    background: { color: "#fff" },
    padding: 0,
    boxShadow: "10px 0 12px -2px #888",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    height: "100%",
    margin: "auto",
    padding: "5px",
    backgroundColor: "#fff",
  },
  searchWindow: {
    maxWidth: 450,
    margin: {
      left: 5,
      right: 5,
    },
  },
  imageStyle: {
    width: "60px",
    height: "auto",
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 500,
    maxWidth: "100%",
  },
  "@media (max-width: 1120px)": {
    container: {
      flex: { direction: "column" },
      width: "100%",
    },
    imageStyle: {
      display: "none",
    },
  },
});
