import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "80vh",
    minWidth: "100vw",
    marginTop: "80px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "60vh",
      marginTop: "10px",
    },
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    backgroundRepeat: "no-repeat  ", // Never repeat
    backgroundSize: " cover", // Keep size cover
    backgroundPosition: "center",
    minHeight: "70vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
      backgroundSize: "background-size: contain",
      backgroundRepeat: "no-repeat",
    },
  },

  thirdPage: {
    minHeight: "50vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "50px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "20vh",
      marginTop: "5px",
    },
  },

  description: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70vw",
  },
}));

export default useStyles;
