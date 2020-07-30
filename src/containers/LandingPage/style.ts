import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    minHeight: "75vh",
    // height: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    marginTop: 50,
  },
  "@media (max-width: 1550px)": {
    cardContainer: {      
      justifyContent: "center",
    },
  },
  "@media (max-width: 1120px)": {
    cardContainer: {
      width: "100%",
      marginTop: 150,
    },
  },
});
