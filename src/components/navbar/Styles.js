import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
    fontSize: "18px,",
    [theme.breakpoints.down("sm")]: {
      color: "black",
    },
  },
}));

export default useStyles;
