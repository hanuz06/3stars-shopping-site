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
    margin: {
      top: 5,
      bottom: 5,
    },
  },
  cardContainer: {
    maxWidth: 257,
    height: 400,
    margin: {
      left: 5,
      right: 5,
      top: 12,
      bottom: 12,
    },
    padding: 0,
  },
});
