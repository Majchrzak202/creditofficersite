import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  boxitem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    color: "#C0C0C0",
  },
  boxcontainer: {
    borderRight: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    color: "#C0C0C0",
  },
});

export default useStyles;
