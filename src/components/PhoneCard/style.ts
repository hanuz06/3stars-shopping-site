import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  textStyle: {
    margin: {
      top: 10,
      bottom: 10,
    },
  },
  textContainer: {
    width: "100%",
    padding: {
      top: 5,
      bottom: 5,
    },
  },
  cardContainer: {
    width: 250,
    minWidth: 250,
    height: 400,
    margin: 10,
    padding: 0,
  },
});
