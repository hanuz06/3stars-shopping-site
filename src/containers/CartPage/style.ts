import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    minHeight: "75vh",
    // height: "auto",
    justifyContent: "center",
    marginTop: 80,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "@media (max-width: 1120px)": {
    container: {
      marginTop: 120,
    },
  },
  "@media (max-width: 750px)": {
    innerContainer: {
      margin: {
        left: "auto",
        right: "auto",
        bottom: 10,
      },
    },
  },
});
