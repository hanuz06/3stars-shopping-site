import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: 50,
  },
  "@media (max-width: 1120px)": {
    cardContainer: {
      width: "100%",
    },
  },
});
