import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  reco: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    paddingTop: "15px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    width: "80vw",
    backgroundColor: "#D3D3D3",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default useStyles;
