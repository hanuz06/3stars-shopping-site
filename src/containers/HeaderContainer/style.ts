import { createUseStyles } from "react-jss";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",
    height: "auto",
    minHeight: 40,
    lineHeight: 2,
    background: { color: "black" },
  },
  lowerContainer: {
    display: "flex",
    background: { color: "#fff" },
  },
});
