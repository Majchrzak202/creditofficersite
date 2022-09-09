import React from "react";
import { Grid, Typography, CardMedia, Card } from "@mui/material";
import MainPhoto from "./../../../assets/MainPhoto.png";
import useStyles from "./Styles";

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card style={{ borderRadius: "0px" }}>
        <Grid className={classes.containerGrid} container>
          <Grid
            className={classes.titleGrid}
            xs={12}
            sm={12}
            md={7}
            lg={8}
            xl={8}
            item
          >
            <Card className={classes.titleCard}>
              <Typography
                style={{ fontSize: "30px", fontWeight: "700", width: "80%" }}
                variant="h1"
              >
                „Jeśli priorytety Klientów nie są naszymi priorytetami, nie mamy
                żadnych priorytetów”
              </Typography>
              <Typography
                align="right"
                style={{ color: "grey", marginLeft: "50px" }}
              >
                ~Roger Dow
              </Typography>
            </Card>
          </Grid>
          <Grid
            className={classes.imageGrid}
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={4}
            item
          >
            <CardMedia src={MainPhoto}>
              <img className={classes.image} src={MainPhoto} alt="MainImage" />
            </CardMedia>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default MainPage;
