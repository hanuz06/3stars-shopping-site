import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",
    height: "auto",
    minHeight: 40,
    lineHeight: 2,
    background: { color: "black" },
  },
  container: {
    display: "flex",
    width: "80%",
    height: "100%",
    margin: "auto",
    padding: "5px",
  },
  topLeft: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    height: "100%",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 130,
  },
  textStyle: {
    color: "white",
    marginLeft: 10,
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    align: { items: "center" },
    width: "50%",
    height: "100%",
  },
  snsLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: 100,
    maxWidth: 120,
  },
  loginSignupLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    maxWidth: 200,
  },

  "@media (max-width: 1120px)": {
    container: {
      flex: { direction: "column" },
      alignItems: "center",
    },
    topLeft: {
      width: "80%",
    },
    contactInfo: {
      width: 260,
    },
  },
  "@media (max-width: 775px)": {
    topLeft: {
      flex: { direction: "column" },
      alignItems: "center",
    },
    topRight: {
      flex: { direction: "column" },
      width: "80%",
      alignItems: "center",
    },
    contactInfo: {
      justifyContent: "center",
    },
  },
});
