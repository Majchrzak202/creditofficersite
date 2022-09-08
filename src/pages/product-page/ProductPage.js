import React from "react";
import useStyles from "./Styles";
import { useParams } from "react-router";
import offerSegments from "../../components/consts/Offers";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const classes = useStyles();

  const title = offerSegments[id - 1].title;
  const backgroundImage = offerSegments[id - 1].backgroundImage;
  const longDescription = offerSegments[id - 1].longDescription;
  return (
    <Box>
      <Box className={classes.page}>
        <Paper
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          }}
          className={classes.paperContainer}
        >
          <Typography style={{ color: "white" }} variant="h3" fontWeight={700}>
            {title}
          </Typography>
        </Paper>
      </Box>

      <Box className={classes.thirdPage}>
        <Box className={classes.description}>
          <Typography align="inherit">{longDescription}</Typography>
        </Box>
        <Link to="/kontakt">
          <Button style={{ marginTop: "50px" }}>Skontaktuj się ze mną</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductPage;
