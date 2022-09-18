import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ThumbUp } from "@mui/icons-material";
import useStyles from "./Styles";
import recomendation from "../../consts/RecomendationArray";



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
        {recomendation.map((reco) => (
          <Grid className={classes.item} item>
            <ThumbUp />
            <Typography align="left" style={{ marginLeft: "20px" }}>
              {reco.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Recomendations;
