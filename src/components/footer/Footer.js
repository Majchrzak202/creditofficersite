import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import { LocalPhone, Email, FmdGood } from "@mui/icons-material";
import useStyles from "./Styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 9 }}
        py={{ xs: 5, sm: 7 }}
        sx={{ bgcolor: "#37393b" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ borderRight: 2 }} className={classes.boxcontainer}>
                <Box>
                  <Typography fontWeight={700}>Konstantyów Łódzki</Typography>
                </Box>
                <Box className={classes.boxitem}>
                  <FmdGood /> Jana Pawła II 34
                </Box>
                <Box className={classes.boxitem}>
                  <LocalPhone />
                  784840722
                </Box>
                <Box className={classes.boxitem}>
                  <Email fontSize="small" />
                  Biuro@filipkredyty.pl
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
