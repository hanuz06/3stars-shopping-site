import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
  },
  columnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    padding: 5,
    margin: {
      left: 5,
      right: 5,
      bottom: 15,
    },
    // border: "1px solid green",
  },

  "@media (max-width: 1080px)": {
    container: {
      display: "none",
    },
  },
});
