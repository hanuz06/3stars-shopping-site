import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: {
      bottom: 10,
    },
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    maxWidth: "100%",
    padding: 10,
    margin: {
      left: 5,
      right: 5,
    },
  },
  imageStyle: {
    width: "8rem",
    height: "8rem",
  },
  counterContainer: {
    display: "flex",
    width: 110,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
  },
  hide: {
    display: "none",
  },
  trashBinIconStyle: {
    cursor: "pointer",
    color: "orange",
  },
  "@media (max-width: 1080px)": {
    container: {
      flexDirection: "column",
    },
    hide: {
      display: "block",
      marginRight: 5,
    },
    imageStyle: {
      width: "15rem",
      height: "15rem",
    },
    infoContainer: {
      width: "100%",
      justifyContent: "flex-start",
    },
  },
});
