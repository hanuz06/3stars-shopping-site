import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100vw",
    maxWidth: "100%",
    minHeight: "75vh",    
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
  image: {
    display: "block",
    maxWidth: 350,
    height: "auto",
  },
  buttonContainer: {
    display: "flex",
  },
  backToProductsButton: {
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    width: 160,
  },
  addToCartButton: {
    borderRadius: 10,
    width: 160,
    maxWidth: 160,
  },
  "@media (max-width: 1121px)": {
    container: {
      marginTop: 100,
    },
  },
  "@media (max-width: 755px)": {
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
      marginTop: 150,
    },
    image: {
      width: 200,
    },
  },
});
