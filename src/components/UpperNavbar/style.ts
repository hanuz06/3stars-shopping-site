import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",
    width: "100%",
    height: "auto",
    minHeight: 40,
    lineHeight: 2,
    padding: 0,
    background: { color: "black" },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    height: "100%",
    margin: "auto",
    padding: {
      top: 5,
      bottom: 5,
    },
  },
  topLeft: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    height: "100%",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: {
      left: 10,
      right: 10,
    },
    marginRight: 20,
  },
  textStyle: {
    color: "white",
    marginLeft: 10,
    whiteSpace: "nowrap",
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    align: { items: "center" },
    width: "45%",
    height: "100%",
    paddingRight: 25,
  },
  snsLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    minWidth: 110,
    margin: {
      left: 5,
      right: 5,
    },
  },
  loginSignupLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    maxWidth: 200,
    marginRight: 5,
  },

  "@media (max-width: 1205px)": {
    container: {
      flex: { direction: "column" },
      alignItems: "center",
    },
    topLeft: {
      width: "80%",
    },
    topRight: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: 0,
    },
    contactInfo: {
      width: 260,
    },
  },
  iconStyle: {},
  "@media (max-width: 775px)": {
    topLeft: {
      display: "none",
    },
    contactInfo: {
      justifyContent: "center",
    },
  },
  "@media (max-width: 455px)": {
    topRight: {
      flex: { direction: "column" },
    },
    snsLinks: {
      width: 200,
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    textStyle: {
      fontSize: "1.2em",
    },
  },
});
