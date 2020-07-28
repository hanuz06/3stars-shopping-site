import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100vw",
    height: "75vh",
    maxHeight: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    border: "1px solid #D3D3D3",
    margin: {
      left: 5,
      right: 5,
    },
  },
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  "@media (max-width: 1120px)": {
    container: {
      marginTop: 120,
    },
  },
  "@media (max-width: 750px)": {
    container: {
      marginTop: 250,
    },
    wrapContainer: {
      alignItems: "center",
    },
    innerContainer: {
      margin: {
        left: "auto",
        right: "auto",
        bottom: 10,
      },
    },
  },
  "@media (max-width: 575px)": {
    wrapContainer: {
      marginTop: 300,
    },
  },
});
