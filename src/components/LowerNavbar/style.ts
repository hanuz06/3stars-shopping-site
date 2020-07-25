import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",    
    width: "100%",
    height: "100%",
    margin: "auto",
    padding: "5px",    
    "@media (maxWidth: 1128px)": {
      flex: { direction: "column" },
    },
  },
});
