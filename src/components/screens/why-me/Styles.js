import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "40px",
  },
  container: {
    marginTop: "5px",
    width: "50vh",
    padding: "20px",
  },

  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  box: {
    padding: "50px",
    borderRadius: "99%",
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svgIcon: {
    transform: "scale(2.5)"
  }
});

export default useStyles;
