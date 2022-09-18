import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  offer: {
    minHeight: "100vh",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    padding: "30px",
  },
  offerCard: {
    padding: "30px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F0F0F0",
      transition: "all .3s ease-in",
    },
  },
  title: {
    marginBottom: "10px",
    "title::after": {
      position: "absolute",
      content: "\"\"",
      width: "0%",
      height: "4px",
      backgroundColor: "whitesmoke",
      left: "50%",
      bottom: "-10px",
      transition: "all 0.4s ease-in-out"
    },
    ".container:hover .title::after": {
      "width": "100%",
      "left": "0"
    }
  },
});

export default useStyles;
