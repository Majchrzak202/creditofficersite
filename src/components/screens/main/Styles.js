import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "auto",
    minWidth: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "-40px",
    backgroundColor: "#F5F5F5",
  },
  containerGrid: {
    height: "100%",
  },
  titleGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    borderRadius: "0px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "hsla(0, 0.00%, 100.00%, 1.00)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    width: "auto",
    paddingBottom: "30px",
    paddingTop: "60px",
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
  },
}));

export default useStyles;
