import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ThumbUp } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  reco: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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

const Recomendations = () => {
  const classes = useStyles();
  return (
    <div className={classes.reco}>
      <Typography
        style={{ marginBottom: "15px", fontWeight: 800 }}
        variant="h5"
      >
        Dlaczego warto ze mną współpracować:
      </Typography>
      <Grid className={classes.container} container>
        <Grid className={classes.item} item>
          <ThumbUp />
          <Typography align="left" style={{ marginLeft: "20px" }}>
            Jestem bardzo zadowlony, wzasadzie nie wiem jak to sie stalo ale
            dostalem 1 mln Jestem bardzo zadowlony, wzasadzie nie wiem jak to
            sie stalo ale dostalem 1 mln
          </Typography>
        </Grid>

        <Grid className={classes.item} item>
          <ThumbUp />
          <Typography align="left" style={{ marginLeft: "20px" }}>
            Super obsluga, bardzo dobry ten rosol a pyzy to juz poezja Super
            obsluga, bardzo dobry ten rosol a pyzy to juz poezja Super obsluga,
            bardzo dobry ten rosol a pyzy to juz poezja{" "}
          </Typography>
        </Grid>

        <Grid className={classes.item} item>
          <ThumbUp />
          <Typography align="left" style={{ marginLeft: "20px" }}>
            Yayay, thats super great and amaizng that we met Joanna!Yayay, thats
            super great and amaizng that we met Joanna!Yayay, thats super great
            and amaizng that we met Joanna!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Recomendations;
