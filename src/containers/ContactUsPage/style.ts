import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "100vw",
    minHeight: "80vh",
    marginTop: 33,
  },
  innerContainer: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    width: "70vw",
    padding: 20,
    // border: "1px solid red",
  },
  leftContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
    // border: "1px dashed green",
  },
  formContainer: {
    width: "50%",
    // border: "1px solid blue",
  },
  "@media (max-width: 1120px)": {
    container: {
      marginTop: 65,
    },
    innerContainer: {
      flexDirection: "column",
      justifyContent: "center",
    },
    leftContainer: {
      width: "100%",
      marginRight: 0,
    },
    formContainer: {
      display: "flex",    
      width: "100%",
    },
  },
  "@media (max-width: 577px)": {
    innerContainer: {
      padding: 0,
      paddingTop: 20,
    },
  },
});
