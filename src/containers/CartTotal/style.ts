import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    maxHeight: "auto",
    justifyContent: "flex-end",
    width: "100%",  
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: {
      left: 5,
      right: 5,
    },
  },
  totalContainerStyle: {
    textAlign: "right",
  },
  totalStyle: {
    padding: {
      top: 5,
    },
  },
  paypalButtonStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "10rem",
  },
  "@media (max-width: 1080px)": {
    container: {
      justifyContent: "flex-start",
    },
    totalContainerStyle: {
      textAlign: "left",
    },
  },
});
