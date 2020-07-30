import { createUseStyles } from "react-jss";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

export const useStyles = createUseStyles({
  upperContainer: {
    display: "flex",    
    minHeight: 40,
    lineHeight: 2,
    background: { color: "black" },
  },
  lowerContainer: {
    display: "flex",
    background: { color: "#fff" },
  },
  backToTopButton: {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#F36161',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
});
