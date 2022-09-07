import React from "react";
import useStyles from "./Styles";
import { Grid, Typography, Box } from "@mui/material";
import { Anchor, Architecture } from "@mui/icons-material";
import { BeachAccess } from "@mui/icons-material";

const WhyMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography style={{ paddingTop: "50px" }} fontWeight={800} variant="h5">
        Dlaczego warto skorzystać z mojej pomocy?
      </Typography>
      <Grid
        className={classes.container}
        style={{ marginTop: "30px" }}
        container
        spacing={1}
      >
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: '5px'
            }}
          >
            <Box className={classes.box}>
              <BeachAccess className={classes.svgIcon} />
            </Box>
            <Typography style={{ marginTop: "15px" }}>
              Pewność i bezpieczeństwo
            </Typography>
          </Box>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className={classes.box}>
              <Anchor className={classes.svgIcon} />
            </Box>
            <Typography style={{ marginTop: "15px" }}>
              Szeroki wybór ponad 21 banków
            </Typography>
          </Box>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className={classes.box}>
              <Architecture className={classes.svgIcon} fontSize="large" />
            </Box>
            <Typography style={{ marginTop: "15px" }}>
              Plan skrojony pod Twoje potrzeby
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyMe;
