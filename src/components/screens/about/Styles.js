import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
  },
  img: {
    width: "300px",
    height: "300px",
    borderRadius: "99%",
    backgroundColor: "black",
  },
});

export default useStyles;