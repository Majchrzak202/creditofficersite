import React from "react";
import useStyles from "./Styles";
import { Grid,  Typography, Box } from "@mui/material";
import {  Anchor, Architecture } from "@mui/icons-material";
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
        style={{ marginTop: "50px" }}
        container
        spacing={2}
      >
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box className={classes.box}>
            <BeachAccess className={classes.svgIcon} />
          </Box>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box className={classes.box}>
            <Anchor className={classes.svgIcon} />
          </Box>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={4} md={4}>
          <Box className={classes.box}>
            <Architecture className={classes.svgIcon} fontSize="large" />
          </Box>
        </Grid>
      </Grid>
      <Grid
        className={classes.container}
        style={{ marginTop: "50px" }}
        container
        spacing={2}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Box>Pewność i bezpieczeństwo</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box>Szeroki wybór ponad 21 banków</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box>Plan skrojony pod Twoje potrzeby</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyMe;
