import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
    margin: "auto",
    background: { color: "#fff" },
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    height: "100%",
    margin: "auto",
    padding: "5px",
    backgroundColor: "#fff",
  },
});
