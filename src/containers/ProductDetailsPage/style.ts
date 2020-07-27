import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100vw",
    maxWidth: "100%",
    height: "75vh",
    maxHeight: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  wrapperContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  buttonContainer: {
    display: "flex",
  },
  image: {
    display: "block",
    maxWidth: 350,
    height: "auto",
  },
  "@media (max-width: 1121px)": {
    container: {
      marginTop: 200,
    },
  },
  "@media (max-width: 755px)": {
    container: {
      marginTop: 400,
    },
    wrapperContainer: {
      flexDirection: "column",
      justifyContent: "center",
    },
    innerContainer: {
      margin: {
        left: 5,
        right: 5,
        bottom: 10,
      },
    },
    buttonContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  "@media (max-width: 350px)": {
    container: {
      marginTop: 300,
    },
    image: {
      width: 200,
    },
  },
});
