import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
    margin: "auto",
    background: { color: "#fff" },
    // borderBottom: "1px solid grey",
    boxShadow: "10px 0 10px -2px #888"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: "100%",
    margin: "auto",
    padding: "5px",
    backgroundColor: "#fff",
  },
  searchWindow: {
    maxWidth: 550,
  },
  "@media (max-width: 1120px)": {
    container: {
      flex: { direction: "column" },
      width: "100%",
    },
  },
});
