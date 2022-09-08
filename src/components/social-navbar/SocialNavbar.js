import React from "react";
import useStyles from "./Styles";
import { Container, Toolbar, Grid } from "@mui/material";
import { LocalPhone, Email, WatchLater } from "@mui/icons-material";

const SocialNavbar = () => {
  const classes = useStyles();
  return (
    <Container
      sx={{
        bgcolor: "black",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
      }}
      maxWidth="xxl"
    >
      <Toolbar>
        <Grid className={classes.container} container>
          <Grid
            className={classes.item}
            display={{ xs: "flex", sm: "flex", lg: "flex", md: "flex" }}
            item
          >
            <LocalPhone fontSize="small" />
            784840722
          </Grid>
          <Grid
            className={classes.item}
            display={{ xs: "flex", sm: "flex", lg: "flex", md: "flex" }}
            item
          >
            <Email fontSize="small" />
            Biuro@filip.pl
          </Grid>
          <Grid
            display={{ xs: "none", sm: "flex", lg: "flex", md: "flex" }}
            className={classes.item}
            item
          >
            <WatchLater fontSize="small" />
            Pn - Pt 9:00 - 18:00
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default SocialNavbar;
