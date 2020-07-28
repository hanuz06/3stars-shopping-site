import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
  },
  columnStyle: {
    padding: 10,
    margin: {
      left: 15,
      right: 15,
    },
    border: "1px solid red",
  },

  "@media (max-width: 988px)": {
    container: {
      display: "none",
    },
  },
});
