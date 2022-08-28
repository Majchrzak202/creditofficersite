import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import useStyles from "./Styles";
import offerSegments from "../../consts/Offers";
import { Link } from "react-router-dom";

const Offer = () => {
  const classes = useStyles();

  return (
    <div className={classes.offer}>
      <Typography fontWeight={800} variant="h5">
        Wybierz najlepsze rozwiązanie:
      </Typography>

      <Grid className={classes.containergrid} container spacing={3}>
        {offerSegments.map((offer) => (
          <Grid
            key={offer.title}
            className={classes.itemgrid}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/kredyty/${offer.id}`}
            >
              <Card style={{ padding: "30px" }}>
                {offer.icon}
                <Typography fontWeight={800} style={{ marginBottom: "10px" }}>
                  {offer.title}
                </Typography>
                <Typography align="justify">{offer.shortDescription}</Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Offer;
